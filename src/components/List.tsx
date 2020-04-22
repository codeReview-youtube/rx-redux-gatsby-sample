import React, { FC } from "react"
import styles from "./list.module.scss"

interface Props {
  data: any[]
}

/**
 * @author
 * @function List
 **/
const List: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.map(it => (
        <div className={styles.card} key={it.login.uuid}>
          <div className={styles.cover}>
            <img src={it.picture.large} alt={it.name.first} />
          </div>
          <div className={styles.info}>
            <h2>{`${it.name.title} - ${it.name.first} ${it.name.last}`}</h2>
            <p>{it.dob.age}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
