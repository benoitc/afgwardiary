function(doc) {
    if (doc.Category && typeof(doc.Category) != "undefined") {
      emit(doc.Category, null);
    }  
}
