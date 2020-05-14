import React from 'react'
import { connect } from "react-redux";
import {increment,decrement} from '../store/action'
import   '../Components/Counter.css'

const Counter=(props)=> {
     console.log(props.count)
        return (
          <React.Fragment>
            <div className="counter">
              <h2>Counter</h2>
              <div>
                <button className="pointer" onClick={() => props.decrement(props.count)}>-</button>
                <input className="count" value={props.count}/>
                <button onClick={() => props.increment(props.count)}>+</button>
              </div>
            </div>      
            </React.Fragment>

        );
}
const mapStateToProps = state => {
    return {
      count: state.counter
    };
   };

   const mapDispatchToProps=(dispatch)=>{
       return{
           increment: ()=>{dispatch(increment())},
           decrement: ()=>{dispatch(decrement())}
       }
   }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

  