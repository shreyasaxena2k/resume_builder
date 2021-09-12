import userReducer from './reducers/userReducer'
import templateReducer from './reducers/templateReducer';
import detailsReducer from './reducers/detailsReducer';
import {combineReducers} from "redux"
import saveReducer from "./reducers/saveReducer"

let rootReducer= combineReducers({
    template:templateReducer,
    user:userReducer,
    details:detailsReducer,
    saveState:saveReducer,
})
export default rootReducer