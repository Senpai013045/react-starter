import {Button} from "..";
import {
  useAppSelector,
  useAppDispatch,
  increment,
  decrement,
  add,
  reset,
} from "../../../store";

export const ReduxDemo = () => {
  const count = useAppSelector(state => state.count.value);
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const add5 = () => {
    dispatch(add(5));
  };

  const sub5 = () => {
    dispatch(add(-5));
  };

  const resetHandler = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Redux Demo</h1>
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
      <Button onClick={incrementHandler}>Increment</Button>
      <Button theme="solid-secondary" onClick={decrementHandler}>
        Decrement
      </Button>
      <Button theme="light-secondary" onClick={add5}>
        Add 5
      </Button>
      <Button theme="line" onClick={sub5}>
        Subtract 5
      </Button>
      <Button theme="line-primary" onClick={resetHandler}>
        Reset
      </Button>
    </div>
  );
};
