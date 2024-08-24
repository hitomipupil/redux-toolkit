import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake, addCake } from "../features/cake/cakeSlice";


const Cake = () => {
    const [input, setInput] = useState(0)
    const dispatch = useDispatch();
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);

    return (
    <div>
        <h2>{numOfCakes}</h2>
        <input
         type="number"
         value={input}
         onChange={(e) => setInput(Number(e.target.value))}
         />
        <button onClick={() => dispatch(buyCake(input))}>Buy cake</button>
        <button onClick={() => dispatch(addCake(input))}>Add cake</button>
        </div>
    )
};

export default Cake;
