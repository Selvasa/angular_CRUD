import { createAction, props } from "@ngrx/store";

export const inc = createAction('increment', (state, name) => ({
    state, name
}));
export const dec = createAction('decrement');
export const reset = createAction('reset');


export const post_Action_Data = createAction('[crud] post', (m => m));
export const update_Action_Data = createAction('[crud] update', m => m);
export const delete_Action_Data = createAction('[crud]', (m => m));

