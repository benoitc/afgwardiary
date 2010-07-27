function(head, req) {
    
    var ddoc = this;

    var Mustache = require("vendor/couchapp/lib/mustache"),
        path = require("vendor/couchapp/lib/path").init(req),
        Atom = require("vendor/couchapp/lib/atom");

    var templates = ddoc.templates; 
    
     
    var assetPath = path.asset(),
        browsePath = path.list("browse", req.path[req.path.length-1], {
                            startkey: [req.query.startkey[0]],
                            endkey: [req.query.startkey[0], {}],
                            include_docs:true,
                            limit: 10,
                            descending: true});


    function sendRow(row) {
        var doc = row.doc;
        var summary = '';
        if (doc.Summary && doc.Summary.length <= 350) {
            summary = doc.Summary;
        } else {
            summary = (doc.Summary.replace(/<(.|\n)*?>/g, '').substring(0,350) + '...');
        }
        doc.Summary = summary;
        send(Mustache.to_html(templates.browse.row, {
            showPath: path.show("report", doc._id),
            doc: doc
        }));
    }


    provides("html", function() {
        var firstRow = getRow(),
            firstKey = firstRow.key,
            endKey = [],
            browseKey = req.query.startkey[0],
            prevKey = req.query.prevKey || [],
            viewName = req.path[req.path.length-1],
            limit = req.query.limit || 0;
             
        send(Mustache.to_html(templates.browse.header, {
            assetPath: assetPath,
            browsePath: browsePath,
            browseKey: browseKey
        }));

        if (typeof(prevKey) == "string") {
            prevKey = JSON.parse(prevKey);
    }
         
        var i = 1;
        sendRow(firstRow);
        while (row = getRow()) {
            sendRow(row);
            endKey = row.key;
            if (i < limit) endKey = row.key;
            i++;
        }

        if (i < limit) endKey = [];

        return Mustache.to_html(templates.browse.footer, {
            assetPath: assetPath,
            firstKey: JSON.stringify(firstKey),
            endKey: JSON.stringify(endKey),
            browseKey: browseKey,
            prevKey: JSON.stringify(prevKey),
            currentView: viewName
        });
    });
}
