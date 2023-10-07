import {useCallback, memo} from 'react';
import {useRecoilState} from "recoil";

import counterState from "../store/counter.ts";

const initialCounterValue = 0;

const Counter = memo(() => {
    const [counter, setCounter] = useRecoilState(counterState);

    const incrementButtonHandler = useCallback(() => {
        setCounter((prev) => prev += 1);
    }, [])

    const decrementButtonHandler = useCallback(() => {
        setCounter((prev) => prev -= 1);
    }, [])

    const resetButtonHandler = useCallback(() => {
        setCounter(initialCounterValue);
    }, [])

    return(
        <div>
            <p>{counter}</p>
            <button onClick={incrementButtonHandler}>+</button>
            <button onClick={decrementButtonHandler}>-</button>
            <button onClick={resetButtonHandler}>Reset</button>
        </div>
    );
});

export default Counter;