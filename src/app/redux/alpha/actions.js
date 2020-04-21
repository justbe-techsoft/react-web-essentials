import { types } from './types.js';

export const incrementCount = (value) => {
    return {
        type: types.INCREMENT_COUNT,
        payload: value
    }
};

export const decrementCount = (value) => {
    return {
        type: types.DECREMENT_COUNT,
        payload: value
    }
};

