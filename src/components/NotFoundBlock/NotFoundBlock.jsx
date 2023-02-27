import React from 'react'

import styles from './NotFoundBlock.module.scss'

export default function NorFoundBlock() {
  return (
    <div className={styles.notfound}>
       <h2>Ничего не найдено :( </h2>
       <p>К сожелению у вас нету такой страницы</p>
    </div>
  )
}
