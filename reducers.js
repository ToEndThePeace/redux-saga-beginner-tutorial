export default function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
}
