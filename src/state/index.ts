import { applyMiddleware, createStore } from "redux"
import { createEpicMiddleware } from "redux-observable"
import rootEpic from "./epics"
import rootReducer from "./reducers"

const reduxDevTools = (() => {
  if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
  return undefined
})()

export default () => {
  const middlewares = []

  const epicmiddleware = createEpicMiddleware()

  middlewares.push(epicmiddleware)

  const configureStore = applyMiddleware(...middlewares)(createStore)

  const store = configureStore(rootReducer, reduxDevTools)

  epicmiddleware.run(rootEpic())
  return store
}
