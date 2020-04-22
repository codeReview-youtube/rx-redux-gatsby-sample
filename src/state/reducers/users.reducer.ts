import { ofType } from "redux-observable"
import { of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError, map, mergeMap } from "rxjs/operators"

const initialState = {
  loading: false,
  error: null,
  data: null,
}

const FETCHING = "FETCHING"
const FETCHING_SUCCESS = "FETCHING_SUCCESS"
const FETCHING_FAILURE = "FETCHING_FAILURE"

export default (state = initialState, actions) => {
  if (actions.type === FETCHING) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
      data: null,
    })
  }
  if (actions.type === FETCHING_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      data: actions.payload,
    })
  }
  if (actions.type === FETCHING_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: actions.payload,
      data: null,
    })
  }
  return state
}
// actions
export const fetching = () => ({ type: FETCHING })
const fetchingSuccess = users => ({ type: FETCHING_SUCCESS, payload: users })
// epics

const url = "https://randomuser.me/api/?results=3000"

export const fetchingEpic = actions =>
  actions.pipe(
    ofType(FETCHING),
    mergeMap(() =>
      ajax.getJSON(url).pipe(
        map(users => fetchingSuccess(users)),
        catchError(error =>
          of({
            type: FETCHING_FAILURE,
            payload: error,
          })
        )
      )
    )
  )
