import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecrementValue, IncrementValue } from '../redux/Reducer';

function IncrementDecrement() {
  const ctData = useSelector((state) => state.user.cnt);
  const dispatch = useDispatch();

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className='box1'>
        <h3 style={{marginTop:"20px",color:"blue"}}>Count is: {ctData}</h3>
        <button type='button' className='btn btn-success' onClick={() => dispatch(IncrementValue())}>Increment</button>&nbsp;&nbsp;
        <button type='button' className='btn btn-warning' onClick={() => dispatch(DecrementValue())}>Decrement</button>
      </div>
    </div>
  );
}

export default IncrementDecrement;