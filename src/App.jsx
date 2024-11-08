import { useReducer } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : (state.count = 0),
      };
    case "updateKey":
      return {
        ...state,
        key: action.payload
      }; 
    default:
      return state;
  }
};
function App() {
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(firstReducer, { key: "", count: 0 });
  const ACTION={
    INCREMENT:"increment",
    DECREMENT:"decrement",
    UPDATE_KEY:"updateKey"
  }
  return (
    <>
      <h1>Exercise React</h1>
      <input type='text' onChange={(e) => dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value })}/>
      <h1>You Key is - {state.key} </h1>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
    </>
  );
}

export default App;
