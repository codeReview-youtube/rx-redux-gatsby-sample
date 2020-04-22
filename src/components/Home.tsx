import React, { FC, useEffect } from "react"
import List from "../components/List"
interface Props {
  users: {
    data: any
    error: any
    loading: boolean
  }
  startFetching: () => void
}

/**
 * @author
 * @function Home
 **/

const Home: FC<Props> = ({ startFetching, users }) => {
  useEffect(() => {
    startFetching()
  }, [])

  return (
    <div>
      {users.loading && <p>loading...</p>}
      {users.data && <List data={users.data.results} />}
    </div>
  )
}

export default Home
