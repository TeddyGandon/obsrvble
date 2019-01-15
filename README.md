![Logo](https://raw.githubusercontent.com/TeddyGandon/icons/master/ob.svg?sanitize=true)
# OBSRVBLE
A simple built-in observer toolkit for small JS projects.

# Usage

`npm i obsrvble`

# API doc

## Observable

### subscribe
`subscribe(observer)`
Subcribe an observer to the observable object

### unsubscribe
`unsubscribe(observer)`
Unsubscribe an oberver from the observable object

### unsubscribeAll
`unsubscribeAll()`
Unsubscribe all the observers from the observable object

### dispatch
`dispatch(event, ...d)`
Dispatch an event and resolve the concerned observers

## Observer

### constructor
Creates a new observer
`constructor(event, resolver)`

### get event
The event associated with the observer
`get event()`

# Example

Create an observable object:
```js
import {Observable} from "obsrvble";

export class Foo extends Observable {
    callThisToDispatch(bar) {
        this.dispatch("myEvent", bar);
    }
}
```

Subscribe an observer:
```js
import {Observer} from "obsrvble";

const foo = new Foo();
foo.subscribe(new Observer(
    'myEvent',
    params => {
        // Do something here
        console.log(params[0]); // hello!
    }
));
foo.callThisToDispatch("hello!");
```

# Why?
Because. I did not found any simple KISS observer / observable toolkit on NPM. This is my 🎁 to the community, cheers!
