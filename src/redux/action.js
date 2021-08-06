import {actionType} from './actionType';

export const incrementAction = () => {
    return {
        type: actionType.INCREMENT
    }
}

export const decrementAction = () => {
    return {
        type: actionType.DECREMENT
    }
}