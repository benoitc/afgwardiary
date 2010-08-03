// from couch.js
function encodeOptions(options) {
  var buf = [];
  if (typeof(options) == "object" && options !== null) {
    for (var name in options) {
      if (!options.hasOwnProperty(name)) {continue;}
      var value = options[name];
      if (name == "key" || name == "startkey" || name == "endkey") {
        value = JSON.stringify(value);
      }
      buf.push(encodeURIComponent(name) + "=" + encodeURIComponent(value));
    }
  }
  if (!buf.length) {
    return "";
  }
  return "?" + buf.join("&");
}

function concatArgs(array, args) {
  for (var i=0; i < args.length; i++) {
    array.push(args[i]);
  };
  return array;
};

function makePath(array) {
  var options, path;
  
  if (typeof array[array.length - 1] != "string") {
    // it's a params hash
    options = array.pop();
  }
  path = array.map(function(item) {return encodeURIComponent(item)}).join('/');
  if (options) {
    return path + encodeOptions(options);
  } else {
    return path;    
  }
};
exports.makePath = makePath;

function parseUri(sourceUri){
   /* parseUri by Steven Levithan (http://badassery.blogspot.com) */
    var uriPartNames = ["source","protocol","authority","domain","port","path","directoryPath","fileName","query","anchor"];
    var uriParts = new RegExp("^(?:([^:/?#.]+):)?(?://)?(([^:/?#]*)(?::(\\d*))?)?((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[\\?#]|$)))*/?)?([^?#/]*))?(?:\\?([^#]*))?(?:#(.*))?").exec(sourceUri);
    var uri = {};
    
    for(var i = 0; i < 10; i++){
        uri[uriPartNames[i]] = (uriParts[i] ? uriParts[i] : "");
    }
    
    // Always end directoryPath with a trailing backslash if a path was present in the source URI
    // Note that a trailing backslash is NOT automatically inserted within or appended to the "path" key
    if(uri.directoryPath.length > 0){
        uri.directoryPath = uri.directoryPath.replace(/\/?$/, "/");
    }
    
    return uri;
}
exports.parseUri = parseUri;



exports.init = function(req) {
  return {
    asset : function() {
      var p = req.path, parts = ['', p[0], p[1] , p[2]];
      return makePath(concatArgs(parts, arguments));
    },
    show : function() {
      var p = req.path, parts = ['', p[0], p[1] , p[2], '_show'];
      return makePath(concatArgs(parts, arguments));
    },
    list : function() {
      var p = req.path, parts = ['', p[0], p[1] , p[2], '_list'];
      return makePath(concatArgs(parts, arguments));
    },
    update : function() {
      var p = req.path, parts = ['', p[0], p[1] , p[2], '_update'];
      return makePath(concatArgs(parts, arguments));
    },
    limit : function(limit) {
      var query = req.query;
      var l = query.limit;
      query.limit = limit;
      var view = req.path[req.path.length - 1];
      var list = req.path[req.path.length - 2];
      var link = this.list(list, view, query);
      query.limit = l;
      return link;
    },
    older : function(key) {
      if (!typeof key == "undefined") return null;
      var query = req.query;
      query.startkey = key;
      query.skip=1;
      var view = req.path[req.path.length - 1];
      var list = req.path[req.path.length - 2];
      return this.list(list, view, query);
    },
    absolute : function(path) {
      return 'http://' + req.headers.Host + path;
    }
  }
};
