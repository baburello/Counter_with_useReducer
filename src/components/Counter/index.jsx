import React, { useReducer } from 'react'
import { reducer } from '../../Reducer';
import "./style.css";


const Counter = () => {
    const initialState = localStorage.getItem("count")
        ? Number(localStorage.getItem("count"))
        : 0;
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='counterWrapper'>
            {/* <pre>{localStorage.getItem("count")}</pre> */}
            <h1>Count: {state}</h1>
            <button className='btn' onClick={() => dispatch({ type: "INC" })}>INCREMENT +</button>
            <button onClick={() => dispatch({ type: "DEC" })}>DECREMENT -</button>
            <button onClick={() => dispatch({type:"RESET"})}>RESET 0</button>
        </div>
    );
};

export default Counter