(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.obsrvble = {}));
}(this, function (exports) { 'use strict';

  /**
   * Main observable class. Extends it to have observer pattern.
   */
  class Observable {
    constructor() {
      this._observers = [];
    }
    /**
     * Subcribe an observer to the observable object
     * @param {Observer} observer The observer
     */


    subscribe(observer) {
      this._observers.push(observer);
    }
    /**
     * Unsubscribe an oberver from the observable object
     * @param {Observer} observer The observer
     */


    unsubscribe(observer) {
      this._observers = this._observers.filter(observerToCheck => observerToCheck !== observer);
    }
    /**
     * Unsubscribe all the observers from the observable object
     */


    unsubscribeAll() {
      this._observers = [];
    }
    /**
     * Dispatch an event and resolve the concerned observers
     * @param {String} event The event
     * @param  {...any} d Anyting you want - that will be passed in the observer resolve metod
     */


    dispatch(event, ...d) {
      this._observers.filter(observer => observer.event === event).map(observer => observer._resolve(d));
    }

  }
  /**
   * Main observer class, used in the `subscribe` methods of an `Observable`.
   */

  class Observer {
    /**
     * Creates a new observer
     * @param {String} event The event the observer should listen to
     * @param {Function} resolver The resolver method the observer should invoke when resolved
     */
    constructor(event, resolver) {
      this._event = event;
      this._resolver = resolver;
    }
    /**
     * Resolve method called from the observable
     * @param {*} d 
     */


    _resolve(d) {
      this._resolver(d);
    }
    /**
     * The event associated with the observer
     */


    get event() {
      return this._event;
    }

  }

  exports.Observable = Observable;
  exports.Observer = Observer;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
