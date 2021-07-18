import { actionType } from './actionType';

const INITIAL_STATE = {
    count: 0
}

export const countReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case actionType.INCREMENT:
            return {...state, count: state.count + 1}
        case actionType.DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}