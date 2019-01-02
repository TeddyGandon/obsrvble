# OBSRVBLE
A simple built-in observer tollkit for small JS projects

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
        this.dispatch("myEvent");
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
    }
));
```