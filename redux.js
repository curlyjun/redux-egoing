function reducer(state, action) {
  //초기값을 줘야함
  if (state === undefined) {
    return { color: "yellow" };
  }
}

var store = Redux.createStore(reducer);

console.log(store.getState());
