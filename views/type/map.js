function(doc) {
    if (doc.Type && typeof(doc.Type) != "undefined") {
        emit(doc.Type, null);
    }
}
