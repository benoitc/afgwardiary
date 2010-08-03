function(head, req) {
    
    var ddoc = this,
        path = require("vendor/couchapp/lib/path").init(req);

    send('{"dateTimeFormat": "iso8601", "events": [');

    var sep = "";
    while(row = getRow()) {
        var doc = row.doc;
        
        var coordinates = null;

        if (doc.Latitude && doc.Longitude) {
            coordinates = [parseFloat(doc.Longitude), parseFloat(doc.Latitude)];
        }

        var date_parts = doc.Date.split(" ");
        var summary = '';
        if (doc.Summary && doc.Summary.length <= 350) {
            summary = doc.Summary;
        } else {
            summary = (doc.Summary.replace(/<(.|\n)*?>/g, '').substring(0,350) + '...');
        }

        var event = {
            start: date_parts[0] + "T" + date_parts[1],
            title: doc.Type,
            
            description: summary,
            link: path.show("report", doc._id),
            coordinates: coordinates,
            id: doc._id,
            long_title: doc.Title,
            affiliation: doc.Affiliation,
            category: doc.Category
        }
        send(sep + toJSON(event));
        sep = ",";
    }

    return(']}');
}
