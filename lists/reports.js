function(head, req) {
    var path = require("vendor/couchapp/lib/path").init(req);

    var years = [];
    if (req.query.years)
        years = req.query.years.split(",");
        
    log(years);

    send('{"type": "FeatureCollection", "features": [');

    var sep = "";
    var i = 0;
    while(row = getRow()) {
        
        var year = row.value[1].split("-")[0];
        if (years.indexOf(year) >= 0) {

            var link = path.show("report", row.value[0]);

            var feature = {
                type: "Feature",
                id: row.value[0],
                properties: {
                    href: link
                },
                geometry: {
                    coordinates: row.value[2],
                    type : "Point"
                }
            }
            send(sep + toJSON(feature));
            sep = ', ';
            i += 1;
        }
    }
    return ']}';


}
