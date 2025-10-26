import React from 'react'

export default function Alert(props) {
    const captalized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className="container my-3">
    <div className={` container alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{captalized(props.alert.typ)}</strong>: {props.alert.msg}
</div>
</div>
  )
}
