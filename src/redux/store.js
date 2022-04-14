import { applyMiddleware, compose } from "redux" 
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import { createStore } from "redux"
 
export const configureStore = () => {
  const middlewares = [thunk]
  const composeEnhancers =
    process.env.NODE_ENV !== "production"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose
  return createStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(...middlewares))
  )
}