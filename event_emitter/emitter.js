function Emitter() {
    this.events = {};
}

// Event listener: read on as "upon"
// add function (event listener) to specific type of event 
Emitter.prototype.on = function(prop, listener) {
    // create an array if not existent
    this.events[prop] = this.events[prop] || [];
    this.events[prop].push(listener);
}

// something happens, emitting an event
Emitter.prototype.emit = function (prop){
    // if prop exists (not null), loop through the listener functions, and execute them
    if (this.events[prop]) {
        this.events[prop].forEach(function(item) {
            item();
        });
    }
}

module.exports = Emitter;