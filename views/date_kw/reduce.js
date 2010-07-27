function(keys, values, rereduce) {
    var results = {
        EnemyKIA: 0,
        EnemyWIA: 0,
        FriendlyKIA: 0,
        FriendlyWIA: 0,
        HostNationKIA: 0,
        HostNationWIA: 0
    };

    var props = [
        "EnemyKIA",
        "EnemyWIA",
        "FriendlyKIA",
        "FriendlyWIA",
        "HostNationKIA",
        "HostNationWIA"
    ];

    for (var i=0; i<values.length; i++) {
        props.forEach(function(propname) {
            results[propname] += parseInt(values[i][propname]);
        });
    }
    return results;
}
