import React from 'react'
import style from './Display.module.css'

const props = props =>
    <div className={style.display}>{props.value}</div>

export default props