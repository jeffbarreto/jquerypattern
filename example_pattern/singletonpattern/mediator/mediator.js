// Copyright (c) 2019 Jefferson Barreto <jefferson.barreto@outlook.com>


var mediator = (function (){
    var events = {};

    function Mediator() {};

    Mediator.subscribe = function (eventName, fn) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
    },
    Mediator.unsubscribe = function(eventName, fn) {
        if (events[eventName]) {
            for (var i = 0; i < events[eventName].length; i++) {
                if (events[eventName][i] === fn) {
                    events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    },
    Mediator.publish = function (eventName, data) {
        if (events[eventName]) {
            events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }

    return Mediator;
})();
