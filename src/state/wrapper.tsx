import React from "react"
import { Provider } from "react-redux"
import "rxjs"
import configureStore from "./index"

export default ({ element }) => {
  const store = configureStore()

  return <Provider store={store}>{element}</Provider>
}
