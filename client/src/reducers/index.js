import { combinedReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combinedReducers({
    auth: authReducer,
    errors: errorReducer
})