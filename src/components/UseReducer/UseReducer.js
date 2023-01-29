import {useState, useReducer} from 'react'
import { countReducer } from './countReducer';

//dispatch - replaces setCount() and tells the reducer function what to do
// payload - sends some information to the reducer function

const initialState = {
    count: 0
}

const UseReducer = () => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(countReducer, initialState);

    const handleSubtract = () => {
        const id = "12345"
        dispatch({
            type: "SUBTRACT",
            payload: id
        })
    }
    const handleReset = () => {
        // setCount(0)
        dispatch({
            type: "RESET"
        })
    }
    const handleAdd = () => {
        // setCount(count + 1)
        dispatch({
            type: "ADD",
        })
    }
    
  return (
    <div>
        <div className="--center-all">
            <span style={{fontSize: "5rem"}}>{state.count}</span>

            <div className='--flex-start --p2'>
            <button className="btn --btn-primary" onClick={handleSubtract}>Subtract</button>
            <button className="btn --btn-danger" onClick={handleReset}>Reset</button>
            <button className="btn --btn-success" onClick={handleAdd}>Add</button> 
            </div>
        </div>
    </div>
  )
}

export default UseReducer