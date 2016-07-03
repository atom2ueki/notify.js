'use strict';
// Create an immediately invoked functional expression to wrap our code
(function() {
  // Define our constructor
  window.notify = function() {
    // Create global element here
    
    // Define option defaults
    var defaults = {
      title: 'default title',
      dir: 'ltr',
      body: 'default notification',
      icon: 'images/bell-icon.png',
      timeout: 2000
    };

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === 'object') {
      this.options = extendDefaults(defaults, arguments[0]);
    }else {
      this.options = defaults;
    }

  };

  window.notify.prototype.show = function(action, callback) {
    var alert;
    var notification;

    // check permission granted status
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }
    else if (Notification.permission === 'granted') {
      this.notification = new Notification(this.options.title,
        {body:this.options.body,icon:this.options.icon,dir:this.options.dir});
      if(this.options.timeout && typeof this.options.timeout === "number"){
        setTimeout(this.notification.close.bind(this.notification), this.options.timeout);
      }
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          this.notification = new Notification(this.options.title,
            {body:this.options.body,icon:this.options.icon,dir:this.options.dir});
          if(this.options.timeout && typeof this.options.timeout === "number"){
            setTimeout(this.notification.close.bind(this.notification), this.options.timeout);
          }
        }
      });
    }

    if (action === 'onclick') {
      this.notification.onclick = function() {
        callback();
      };
    }
  };

  // Utility method to extend defaults with user options
  var extendDefaults = function(source, properties) {
    var property;
    for (property in properties) {
      if (source.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  };
}());
