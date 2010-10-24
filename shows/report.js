function(doc, req) {  
    var ddoc = this;

    var Mustache = require("vendor/couchapp/lib/mustache"),
        path = require("vendor/couchapp/lib/path").init(req),
        Atom = require("vendor/couchapp/lib/atom"),
        acronyms = require("lib/text").acronyms,
        linebreaks = require("lib/text").linebreaks;

    var templates = ddoc.templates; 
   
    for(key in doc) {
       if (typeof(doc[key]) == "string") {
          doc[key] = linebreaks(acronyms(doc[key]));
        }
    } 
    var assetPath = path.asset();
    provides("html", function() {
        return Mustache.to_html(templates.report, {
            assetPath:assetPath,
            doc: doc
        });
    });

}
