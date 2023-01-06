import { createStore } from "redux";
import userReducer from "./reducers/authReducer";

const store = createStore(userReducer);

export default store;