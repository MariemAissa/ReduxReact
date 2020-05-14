import Reducer from "../store/reducer";
import { createStore, applyMiddleware } from "redux";


const Logger = store => next => action => {
        console.log('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
}

const Store = createStore(Reducer, applyMiddleware(Logger));

export default Store;