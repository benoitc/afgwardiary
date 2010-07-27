 function(data) {
     return { 
        links: data.rows.map(function(r) {
            return {
                name: r.key,
                nb: r.value
            };
        })
    };
}

