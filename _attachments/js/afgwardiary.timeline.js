(function($) {
    $.afgwardiary = $.afgwardiary || {};

    function afgTimeline(app) {
        var makePath = app.require("vendor/couchapp/lib/path").makePath,
            Mustache = app.require("vendor/couchapp/lib/mustache");

        var templates = app.ddoc.templates;
        var ddoc = app.ddoc;
        var self = this;
        
        var tl,
            map,
            vectorLayer,
            popup,
            resizeTimerID = null,
            loaded = {},
            dataMaxDate = "",
            oldFeatures = [];

        // 2 months interval
        var interval = 131400000;

        // dataset start in 2004
        var startDate = new Date(2004,0,1),
            dataMinDate = startDate;

        var eventSource = new Timeline.DefaultEventSource();

        function onResize() {
            if (resizeTimerID == null) {
                 resizeTimerID = window.setTimeout(function() {
                     resizeTimerID = null;
                     tl.layout();
                 }, 500);
            }
        }

        function changeYear() {
            var d= new Date($(this).val(), 0, 1);
            tl.getBand(1).setCenterVisibleDate(d);

            
        }

        function make_key(d) {
            var d1  = d.getDate();
            var day = (d1 < 10) ? '0' + d1 : d1;
            
            var m = d.getMonth() +1;
            var month = (m < 10) ? '0' + m : m;
            var yy = d.getYear();
            var year = (yy < 1000) ? yy + 1900 : yy;
            if (year < 2004) return "2004-01-01";
            return year + "-" + month + "-" + day;
        }

        function hideFeature(e, feature) {
            vectorLayer.removeFeatures([feature]);
        }

        function showFeature(e, feature) {
            vectorLayer.drawFeature(feature);
        }

        function insertFeature(e, feature) {
            vectorLayer.addFeatures(feature)
        }



        function updateMap() {
            var band = tl.getBand(0),
                minDate = band.getMinVisibleDate(),
                maxDate = band.getMaxVisibleDate();

            mind = minDate.getTime();
            maxd = maxDate.getTime();

            if (map.popups.length >= 1) {
                map.removePopup(map.popups[0]);
            }
            

            for (var i = 0; i< oldFeatures.length; i++) {
                var feature = oldFeatures[i],
                    startTime = feature.data.startTime;
                if (startTime < mind || startTime > maxd) {
                    $("#afg-map").trigger("hideFeature", feature);
                }
            }
            oldFeatures = [];

            var iterator = eventSource.getEventIterator(minDate, maxDate);


            function processEvents() {
                while(iterator.hasNext()) {
                    var evt = iterator.next(),
                        start = evt.getStart(),
                        startTime = start.getTime(),
                        obj = evt._obj;

                    var feature = vectorLayer.getFeatureById(obj.id);

                    if (feature) {
                        oldFeatures.push(feature);
                        $("#afg-map").trigger("showFeature", feature);
                    } else {

                        var point = new OpenLayers.Projection.transform(
                                new OpenLayers.Geometry.Point( obj.coordinates[0], obj.coordinates[1]),
                                new OpenLayers.Projection("EPSG:4326"), 
                                new OpenLayers.Projection("EPSG:900913") )
                        var feature = new OpenLayers.Feature.Vector(
                            point,
                            {
                                startTime: startTime,
                                event: obj,
                            },
                            {
                                externalGraphic: 'openlayers/img/marker.png',
                                graphicHeight: 25, 
                                graphicWidth: 21
                            }
                        );
                        feature.id = obj.id;

                        oldFeatures.push(feature);
                        evt.feature = feature; 
                        $("#afg-map").trigger("insertFeature", feature); 
                    }
                }
                if (!iterator.hasNext() && processEventsInterval) {
                    clearInterval(processEventsInterval);
                }
            }

            var processEventsInterval = setInterval(processEvents, 25);
            
        }

        function load(next, currBlock, callback) {
            if (currBlock > 0) {
                if (loaded[currBlock-1]) {
                    var prev = loaded[currBlock-1];
                } else {
                    var prev = new Date(next.getTime() - interval);
                }
            } else {
                var prev = startDate;
            }
            loaded[currBlock] = next; 
            var startkey = make_key(prev);
            var endkey = make_key(next);

            tl.loadJSON(makePath(["_list", "timeline", "full_date", {
                startkey: startkey, endkey: endkey, include_docs: true}]), 
                function(json, url) {
                    eventSource.loadJSON(json, url);
                    tl.layout();

                    if (callback) callback();
                }
            );
        }

        function getData() {
            var band = tl.getBand(0),
                now = band.getCenterVisibleDate(),
                currBlock = Math.floor((now.getTime() - startDate.getTime()) / interval),
                currBlockTime = startDate.getTime() + (interval * (currBlock+1));
            
            $("#date").html("current date:" + now.toUTCString());
            if ((!dataMaxDate || currBlockTime < dataMaxDate.getTime()) &&
                (!dataMinDate || currBlockTime > dataMinDate.getTime()) &&
                !loaded[currBlock]) {
                // get current block 
                load(new Date(currBlockTime), currBlock);
            }

        }

        var epsg4326 = new OpenLayers.Projection("EPSG:4326");
        var epsg900913 =  new OpenLayers.Projection("EPSG:900913")

        var afgLL = new OpenLayers.LonLat(43.6330688945, 32.8879727554);
        var afgUR = new OpenLayers.LonLat(43.9530688945, 33.2079727554);
        afgLL.transform(epsg4326, epsg900913);
        afgUR.transform(epsg4326, epsg900913);

        var bounds = new OpenLayers.Bounds(afgLL.lon, afgLL.lat,
                afgUR.lon, afgUR.lat);

        this.initMap = function() { 
            var options = {
                maxExtent: bounds.clone(),
                restrictedExtent: bounds.clone(),
                numZoomLevels: 20,
                maxResolution: 156543.0339,
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayProjection: new OpenLayers.Projection("EPSG:4326"),
                units: "degrees",
                control: []
            };

            map = new OpenLayers.Map('afg-map', options);
            var gphy = new OpenLayers.Layer.Google(
                "Google Physical",
                {type: google.maps.MapTypeId.TERRAIN, sphericalMercator: true}
            );
            var gmap = new OpenLayers.Layer.Google(
                "Google Streets", // the default
                {numZoomLevels: 20, sphericalMercator: true}
            );
            var ghyb = new OpenLayers.Layer.Google(
                "Google Hybrid",
                {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20, sphericalMercator: true}
            );
            var gsat = new OpenLayers.Layer.Google(
                "Google Satellite",
                {type: google.maps.MapTypeId.SATELLITE, numZoomLevels:
                22, sphericalMercator: true}
                );

            vectorLayer = new OpenLayers.Layer.Vector("Reports");
            map.addLayers([gphy, gmap, ghyb, gsat, vectorLayer]);
            
            click = new OpenLayers.Control.SelectFeature(
                [vectorLayer],
                {
                    clickout: true
                }
            );
            map.addControl(click);

            vectorLayer.events.on({
                featureselected: function(evt) {
                    var feature = evt.feature; 
                    var data = feature.data.event;
                   
                    var content = Mustache.to_html(templates.popup, {
                        title: "(" + data.title + ") " + data.long_title,
                        link: data.link,
                        Date: data.start,
                        Type: data.title,
                        Affiliation: data.affiliation,
                        Category: data.category
                    });

                    if (map.popups.length == 1) {
                        map.removePopup(map.popups[0]);
                    } 
                    
                    var popup = new OpenLayers.Popup("report", 
                                new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y),
                                new OpenLayers.Size(200,220),
                                content, true, function() {
                                    click.unselect(this.feature);
                                });

                    popup.keepInMap = true;
                    popup.panMapIfOutOfView = true;
                    feature.popup = popup;
                    popup.feature = feature;
                    map.addPopup(popup);
                },
                featureunselected: function(evt) {
                    var feature = evt.feature;
                    if (feature.popup) {
                        feature.popup.feature = null;
                        map.removePopup(feature.popup);
                        feature.popup.destroy();
                        feature.popup = null;
                    }
                },
                featureremoved: function(evt) {
                    var feature = evt.feature;
                    if (feature.popup) {
                        feature.popup.feature = null;
                        map.removePopup(feature.popup);
                        feature.popup.destroy();
                        feature.popup = null;
                    }
                }
            });
            click.activate()

            var customControls = [new OpenLayers.Control.DragPan(),
                                new OpenLayers.Control.PanZoom(),
                                new OpenLayers.Control.LayerSwitcher()];
            
            for (var i=0; i<customControls.length; i++) {
                var control = customControls[i];
                map.addControl(control);
                control.activate();
            }

            var center =  new OpenLayers.LonLat(44.0, 33.0);
            map.setCenter(center.transform(epsg4326, epsg900913), 6);
        }

        
            
        this.init = function() {
            // init map
            self.initMap();

            Timeline.OriginalEventPainter.prototype._showBubble = function(x, y, evt) {
                var feature = evt.feature;
                var center = feature.geometry.bounds.getCenterLonLat();
                map.setCenter(center, 12, true, true);
                vectorLayer.redraw(true);
            }
            
            var theme1 = Timeline.ClassicTheme.create();
            theme1.autoWidth = true;


            var bandInfos = [
                Timeline.createBandInfo({
                    eventSource: eventSource,
                    width:          "80%", 
                    intervalUnit:   Timeline.DateTime.HOUR, 
                    intervalPixels: 120,
                    date: "Jan 01 2004 00:00:00 GMT",
                    timeZone: new Date().getTimezoneOffset() / 60,
                    theme: theme1,
                    layout: 'original'
                }),
                Timeline.createBandInfo({
                    overview: true,
                    eventSource: eventSource,
                    showEventText: false,
                    width:          "20%",
                    intervalUnit:   Timeline.DateTime.WEEK, 
                    intervalPixels: 100,
                    date: "Jan 01 2004 00:00:00 GMT",
                    timeZone: new Date().getTimezoneOffset() / 60,
                    theme: theme1,
                    layout:         'overview'

                })
            ];

            bandInfos[1].syncWith = 0;
            bandInfos[1].highlight = true;

            
            tl = Timeline.create(document.getElementById("afg-timeline"), bandInfos);
          
            load(new Date(startDate.getTime() + interval), 0, function() { 
                tl.layout();
            });
            tl.getBand(0).addOnScrollListener(getData);

            // manage map update

            tl.getBand(0).addOnScrollListener(function() {
                $("#afg-map").trigger("updatemap");
            });
            $("#afg-year").change(changeYear);

            $("#afg-map").bind("updatemap", updateMap);
            $("#afg-map").bind("hideFeature", hideFeature);
            $("#afg-map").bind("showFeature", showFeature);
            $("#afg-map").bind("insertFeature", insertFeature);
            window.onresize = onResize;
        }   

        $(document).ready(function(){ 
            self.init(); 
        });
    }

    $.extend($.afgwardiary, {
        afgTimeline: afgTimeline
    });
 
})(jQuery);
