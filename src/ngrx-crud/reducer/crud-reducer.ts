import { createReducer } from "@ngrx/store";

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
export const crud_reducer = createReducer(initalState,)