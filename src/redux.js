//Require redux.
const redux = require("redux");

// Create a store with redux.createStore.
const store = redux.createStore(counterReducer);

// It will manipulate the state of the store, changing the state of the store.
function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
}

// This function should be called every time the state of the store changes.
function counterSubscriber() {
  //getState is available is a method from createStore.
  //it the latest state of the store after being updated.
  const latestState = store.getState();
  console.log(latestState);
}

//It subscribes to the store.
store.subscribe(counterSubscriber);
//Dispatch will call the reducer and the reducer will change the state of the store.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

console.log(store.getState());
