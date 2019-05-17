function reducer(state, action) {
  //초기값을 줘야함
  if (state === undefined) {
    return { color: "yellow" };
  }
  console.log(state, action);
  var newState;
  if (action.type === "CHANGE_COLOR") {
    newState = Object.assign({}, state, { color: action.color });
  }
  return newState;
}

var store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
