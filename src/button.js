import React from 'react'
const Button = (props) => {

    return (
        <div>
            <button className="btn btn-primary" onClick={props.onClick}>
            </button>
        </div>
    )

}
export default Button