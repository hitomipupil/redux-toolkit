import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default Counter;
