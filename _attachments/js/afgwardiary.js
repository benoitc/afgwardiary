(function($) {
    $.afgwardiary = $.afgwardiary || {};

    function Navigation(app) {
        var makePath = app.require("vendor/couchapp/lib/path").makePath;
        var templates = app.ddoc.templates;
        
        function onMenuClick(e) {
            e.preventDefault();

            var viewName = $(this).attr("id");
            var obj = $(this);

            if (obj.hasClass("toggle")) {
                obj.parent().parent().find('.cbrowse').detach() 
                obj.removeClass("toggle");
                return;
            }
           
            is_browse = $(".cbrowse");
            if (is_browse.length > 0) {
                is_browse.parent().find("a").removeClass("toggle");
                $(is_browse).detach();
            }

            obj.addClass("toggle");
            app.view(viewName, {
                group: true,
                success: function(data) {                    
                    var cnt = $.mustache(templates.browseBox, {
                        links: data.rows.map(function(r) {
                            var link = makePath(["_list", "browse",
                                    "by_" + viewName, {
                                startkey: [r.key],
                                endkey: [r.key, {}],
                                limit: 10,
                                include_docs: true
                            }]);
                            return {
                                name: r.key,
                                nb: r.value,
                                link: link 
                            };
                        
                        })
                    });

                    var ul = $(cnt);
                    obj.parent().parent().after().append(ul);
                
                }
            });
            
            return false;
        };

        $(".browse").bind("click", onMenuClick);
    }

    $.extend($.afgwardiary, {
        Navigation: Navigation
    });
 
})(jQuery);
