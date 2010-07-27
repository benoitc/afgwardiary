function(doc) {
    if (doc.Region)
        emit([doc.Region, doc._id], null);  
}
