function(head, req) {
    var path = require("vendor/couchapp/lib/path").init(req);

    var years = [];
    if (req.query.years)
        years = req.query.years.split(",");
        
    log(years);

    send('{"type": "FeatureCollection", "features": [{"geometry":{"type":"GeometryCollection","geometries":[');

    var sep = "";
    var i = 0;
    while(row = getRow()) {
        
        var year = row.value[1].split("-")[0];
        if (years.indexOf(year) >= 0) {

            var link = path.show("report", row.value[0]);

            var point = {
                coordinates: row.value[2],
                type : "Point",
                id: row.value[0]
            };
            send(sep + toJSON(point));
            sep = ', ';
            i += 1;
        }
    }
    return ']}}]}';


}
