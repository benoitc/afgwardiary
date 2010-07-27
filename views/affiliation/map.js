function(doc) {
    if (doc.Affiliation && typeof(doc.Affiliation) != "undefined") {
      emit(doc.Affiliation, null);
    }
}
