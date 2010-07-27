function(doc, req) {  
    var ddoc = this;

    var Mustache = require("vendor/couchapp/lib/mustache"),
        path = require("vendor/couchapp/lib/path").init(req),
        Atom = require("vendor/couchapp/lib/atom");

    var templates = ddoc.templates; 
    
     
    var assetPath = path.asset();
    provides("html", function() {
        return Mustache.to_html(templates.report, {
            assetPath:assetPath,
            doc: doc
        });
    });

}
