import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { DECREMENT, INCREMENT, INCREMENTBY5, TOGGLE } from '../store/identifiers';
const Counter = () => {
 const counter= useSelector((state)=>state.counter);
 const isToggle = useSelector((state)=>state.showCounter);
 const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:TOGGLE})
  };
  const increHandler=()=>{
    dispatch({type:INCREMENT});
  };
  const increHandler5=()=>{
    dispatch({type:INCREMENTBY5,payload: 5});
  };
  const decreHandler=()=>{
    dispatch({type:DECREMENT});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isToggle &&
      <div className={classes.value}>{counter}</div>
}
      <div style={{margin:"15px"}}>
        <button onClick={increHandler}>Incri</button>
        <button onClick={increHandler5}>Incri by 5</button>
        <button onClick={decreHandler} style={{marginLeft:'5px'}}>deccri</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
