
const initialState = { counter: 0 };

const Reducer=(state = initialState, action)=>{
    
    console.log('reducer', state, action);
    console.log(state.counter )
    console.log(action.type)
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
                };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
                };
        default:
            return state;
    }
}

export default Reducer;