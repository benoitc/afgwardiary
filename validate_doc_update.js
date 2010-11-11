function (newDoc, oldDoc, userCtx, secObj) {
  var v = require("vendor/couchapp/lib/validate").init(newDoc, oldDoc, userCtx, secObj);
  
  if (v.isAdmin()) {
    return true; // admin can do anything
  }
 
  throw({unauthorized : "unauthorized access"});
}
