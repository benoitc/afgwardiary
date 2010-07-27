function(doc) {
    if (doc.Date && typeof(doc.Date) != "undefined") {
      day = doc.Date.split(" ")[0];
      day_parts = day.split("-");
      month = day_parts[0] + "-" + day_parts[1];
      emit(month, null);
    }  
}
