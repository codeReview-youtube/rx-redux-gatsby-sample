import { connect } from "react-redux"
import Home from "../components/Home"
import { fetching } from "../state/reducers/users.reducer"

export default connect(
  //mapState
  ({ users: UsersState }) => ({
    users: UsersState,
  }),
  // mapDispatch
  dispatch => ({
    startFetching: () => dispatch(fetching()),
  })
)(Home)
