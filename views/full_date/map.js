function(doc) {
    if (doc.Date && typeof(doc.Date) != "undefined") {
      day = doc.Date.split(" ");
      iso_date = day[0] + "T" + day[1]; 
      emit(iso_date, null);
    }  
}
