function(doc) {
    if (doc.Category && typeof(doc.Category) != "undefined") {
      emit([doc.Category, doc._id], null);
    }  
}
