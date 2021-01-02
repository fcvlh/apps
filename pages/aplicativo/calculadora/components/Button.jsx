import React from 'react'
import style from './Button.module.css'


const props = props => {
    let classes = 'button '
    //classes += props.operation ? 'operation' : ''
    //classes += props.double ? 'double' : ''
    //classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={style.button}>
            {props.label}
        </button>)
}

export default props