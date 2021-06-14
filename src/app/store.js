import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {addItem} from "./reducer/addItem.reducer";

export const store = createStore(addItem, applyMiddleware(logger));
