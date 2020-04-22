import { combineEpics } from "redux-observable"
import { fetchingEpic } from "../reducers/users.reducer"

export default () => combineEpics(fetchingEpic)
