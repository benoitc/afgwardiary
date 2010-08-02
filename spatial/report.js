function(doc) {
    if (doc.Latitude && doc.Longitude) {
       var loc = [parseFloat(doc.Longitude), parseFloat(doc.Latitude)];

       month = "";
       if (doc.Date) {
           day = doc.Date.split(" ")[0];
           day_parts = day.split("-");
           month = day_parts[0] + "-" + day_parts[1];
       }

       emit({
        type: "Point",
        coordinates: loc
       }, [ doc._id, month, loc ]);
    }
}
