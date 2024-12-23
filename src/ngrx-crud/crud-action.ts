import { createAction, props } from "@ngrx/store";

export const inc = createAction('increment', (state,name)=>({
    state,name
}));
export const dec = createAction('decrement');
export const reset = createAction('reset');