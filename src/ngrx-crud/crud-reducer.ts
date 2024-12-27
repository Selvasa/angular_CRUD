import { createReducer, on } from "@ngrx/store";
import { dec, inc, post_Action_Data, reset, update_Action_Data } from "./crud-action";

const initalState: any = [
    {
        "id": "a019",
        "sName": "selvan",
        "sAge": "20",
        "sAddress": "periyar nagar",
        "sCity": "virudhachalam",
        "sTell": "7402056767"
    },
    {
        "id": "228f",
        "sName": "ajith",
        "sAge": "20",
        "sAddress": "periyar nagar",
        "sCity": "Virudhachalam",
        "sTell": "7402056767"
    },
    {
        "sName": "adithyan ADIthyan",
        "sAge": "10",
        "sAddress": "address",
        "sCity": "new city",
        "sTell": "90807060",
        "id": "3945"
    }
];

const counterState = 10;
export const crud_reducer = createReducer(counterState,
    on(inc, (ok, s) => {
        console.log(ok, s);
        return ok + 1
    }),
    on(dec, (ok) => ok - 1),
    on(reset, (reset) => 0)
)

const initState: any[] = [];
export const post_Reducer = createReducer(initState,
    on(post_Action_Data, (state, current) => {
        const id = state.length === 0 ? 1 : Math.max(...state.map(d => d.id)) + 1;
        const maxnum = { ...current, id: id };
        return [...state, maxnum]
    }),
    on(update_Action_Data, (state, current) => {
        console.log(current);
        const filteredState = state.find((item) => (item.id === current.id))
        return [...state]
    }),

);
