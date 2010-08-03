(function($) {
    $.afgwardiary = $.afgwardiary || {};

    function afgTimeline(app) {
        var makePath = app.require("vendor/couchapp/lib/path").makePath;
        var templates = app.ddoc.templates;
        var ddoc = app.ddoc;
        var self = this;
        
        var tl,
            map,
            vectorLayer,
            resizeTimerID = null,
            loaded = {},
            dataMaxDate = "";

        // 2 months interval
        var interval = 5184000000;

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


        function load(next, currBlock, callback) {
            if (currBlock > 0) {
                var prev = loaded[currBlock-1];
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
                    if (callback) callback();
                    tl.layout()
                    
                }
            );
        }

        function getData() {
            var band = tl.getBand(0),
                now = band.getCenterVisibleDate(),
                currBlock = Math.floor((now.getTime() - startDate.getTime()) / interval),
                currBlockTime = startDate.getTime() + (interval * (currBlock+1))
                nextBlockTime = currBlockTime + interval,
                prevBlockTime = currBlockTime - interval;

            if ((!dataMaxDate || currBlockTime < dataMaxDate.getTime()) &&
                (!dataMinDate || currBlockTime > dataMinDate.getTime()) &&
                !loaded[currBlock]) {
                // get current block 
                load(new Date(currBlockTime), currBlock);
            }

            if (nextBlockTime < band.getMaxDate().getTime() &&
                (!dataMaxDate || nextBlockTime < dataMaxDate.getTime()) &&
                !loaded[currBlock + 1]) {
                // load next block
                load(new Date(nextBlockTime), currBlock + 1);
            }

            if (prevBlockTime > band.getMinDate().getTime() &&
                (!dataMinDate || prevBlockTime > dataMinDate.getTime()) &&
                !loaded[currBlock - 1]) {
                // load previous block
                load(new Date(prevBlockTime), currBlock - 1);
            }
        }

        var epsg4326 = new OpenLayers.Projection("EPSG:4326");
        var epsg900913 =  new OpenLayers.Projection("EPSG:900913")


        var afgLL = new OpenLayers.LonLat(57.499846, 25.5000872);
        var afgUR = new OpenLayers.LonLat(72.4998462, 40.5000872);
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

            map = new OpenLayers.Map('map', options);
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

            var customControls = [new OpenLayers.Control.DragPan(),
                                new OpenLayers.Control.PanZoom(),
                                new OpenLayers.Control.LayerSwitcher()];
            
            for (var i=0; i<customControls.length; i++) {
                var control = customControls[i];
                map.addControl(control);
                control.activate();
            }

            var center =  new OpenLayers.LonLat(65.0, 33.0);
            map.setCenter(center.transform(epsg4326, epsg900913), 8);

        }

            
        this.init = function() {

            // init map
            self.initMap();

            var theme1 = Timeline.ClassicTheme.create();
            theme1.autoWidth = true;
            theme1.timeline_start = new Date(2004,0, 1);
            theme1.timeline_end = new Date(2010,0, 1);

            

            var bandInfos = [
                Timeline.createBandInfo({
                    eventSource: eventSource,
                    width:          "80%", 
                    intervalUnit:   Timeline.DateTime.DAY, 
                    intervalPixels: 120,
                    date: "Jan 01 2004 00:00:00 GMT",
                    theme: theme1,
                    layout: 'original'
                }),
                Timeline.createBandInfo({
                    overview: true,
                    showEventText: false,
                    eventSource: eventSource,
                    width:          "20%",
                    intervalUnit:   Timeline.DateTime.MONTH, 
                    intervalPixels: 100,
                    date: "Jan 01 2004 00:00:00 GMT",
                    trackHeight:    0.4,
                    trackGap:       0.2,
                })
            ];

            for(var x=1; x < bandInfos.length; x++) {
                bandInfos[x].syncWith = (x -1);
                bandInfos[x].highlight = true;
            }

            tl = Timeline.create(document.getElementById("afg-timeline"), bandInfos);
          
            load(new Date(startDate.getTime() + interval), 0);
            tl.getBand(0).addOnScrollListener(getData);

            // manage map update

            tl.getBand(0).addOnScrollListener(function(band) {
                var band = tl.getBand(0),
                    minDate = band.getMinVisibleDate(),
                    maxDate = band.getMaxVisibleDate();

                var iterator = eventSource.getEventIterator(minDate, maxDate);
                while(iterator.hasNext()) {
                    var evt = iterator.next();
                    var obj = evt._obj;

                    var point = new OpenLayers.Projection.transform(
                            new OpenLayers.Geometry.Point( obj.coordinates[0], obj.coordinates[1]),
                            new OpenLayers.Projection("EPSG:4326"), 
                            new OpenLayers.Projection("EPSG:900913") )
                    var feature = new OpenLayers.Feature.Vector(
                        point,
                        {
                            some: obj.title
                        },
                        {
                            externalGraphic: 'openlayers/img/marker.png',
                            graphicHeight: 25, 
                            graphicWidth: 21
                        }
                    );
                    vectorLayer.addFeatures(feature);
                }
                
                    
            });

            
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
