function EventlyException(message) {
    this.message = message;
    this.name = "EventlyException";
}

EventlyException.prototype.toString = function (){  
   return this.name + ': "' + this.message + '"';  
} 
exports.EventlyException = EventlyException;
