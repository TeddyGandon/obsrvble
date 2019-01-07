import { Observable } from "obsrvble";

/**
 * A simple state manager. Used to manage a global state in an app. This state
 * manager is an Observable object, so you can use Observers to subscribe to
 * a change in the stored properties.
 */
export class Statemgr extends Observable {

  /**
   * The constructor
   */
  constructor() {
    super();
    this._state = {};
  }

  /**
   * Stores a property into the state manager. Call 
   * @param {String} property 
   * @param {*} value 
   */
  set(property, value) {
    // Only set the property when the value changes
    if (this.get(property) === value) {
      return;
    }

    // Get the old value
    const oldValue = this.get(property);

    // Set the new value
    this._state[property] = value;

    // Dispatch event to obervers
    this.dispatch(property, oldValue, this.get(property));
  }

  /**
   * Returns a stored property
   * @param {String} property 
   */
  get(property) {
    return this._state[property];
  }

}

export default new Statemgr(); // Act as a service