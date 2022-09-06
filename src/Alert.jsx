import React from 'react'

export const Alert = (props) => {
  return (
    <div style={{height:"50px", marginBottom : 10}}>

    {props.alert &&
    <div className={`alert alert-${props.alert.type} `} role="alert">
        <strong>{props.alert.message}</strong>
    </div>}
    </div>
  )
}
