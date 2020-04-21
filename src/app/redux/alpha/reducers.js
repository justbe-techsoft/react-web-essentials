import { types } from './types';

const INITIAL_STATE = {
    count: 0
}
export const alphaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.INCREMENT_COUNT: {
            return {
                ...state,
                count: state.count + action.payload
            }
        }

        case types.DECREMENT_COUNT: {
            return {
                ...state,
                count: state.count - action.payload
            }
        }
        default: return state;
    }
}