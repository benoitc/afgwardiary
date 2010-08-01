function(doc) {
    if (doc.Latitude && doc.Longitude) {
       loc = [parseInt(doc.Longitude), parseInt(doc.Latitude)]
       emit({
        type: "Point",
        coordinates: loc
       }, [doc._id, loc]);
    }
}
