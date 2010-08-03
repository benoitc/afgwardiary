(function($) {
    $.afgwardiary = $.afgwardiary || {};

    function afgTimeline(app) {
        var makePath = app.require("vendor/couchapp/lib/path").makePath;
        var templates = app.ddoc.templates;
        var ddoc = app.ddoc;
        var self = this;
        
        var tl,
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


        function load(next, currBlock) {
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

                
        this.init = function() {
            var bandInfos = [
                Timeline.createBandInfo({
                    eventSource: eventSource,
                    width:          "80%", 
                    intervalUnit:   Timeline.DateTime.DAY, 
                    intervalPixels: 70,
                    date: "Jan 01 2004 00:00:00 GMT"
                }),
                Timeline.createBandInfo({
                    overview: true,
                    eventSource: eventSource,
                    width:          "20%", 
                    intervalUnit:   Timeline.DateTime.MONTH, 
                    intervalPixels: 100,
                    date: "Jan 01 2004 00:00:00 GMT",
                    trackHeight:    0.4,
                    trackGap:       0.2
                })
            ];

            for(var x=1; x < bandInfos.length; x++) {
                bandInfos[x].syncWith = (x -1);

                bandInfos[x].highlight = true;
            }

            tl = Timeline.create(document.getElementById("afg-timeline"), bandInfos);
          
            load(new Date(startDate.getTime() + interval), 0);
            tl.getBand(0).addOnScrollListener(getData);

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
