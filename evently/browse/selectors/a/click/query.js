function(e) {
    var app = $$(this).app;
  
    var widget = $(this);

    var is_browse = ($(".cbrowse").length > 0);
    if (is_browse) {
        $(".cbrowse").detach();
    }

    return {
        view: widget.attr("id"),
        descending: true,
        group: true
    }
}
