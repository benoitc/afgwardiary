function(doc) {
    if (doc.Date && typeof(doc.Date) != "undefined") {
      day = doc.Date.split(" ")[0];
      day_parts = day.split("-");

      emit(day, doc);
    }  
}
