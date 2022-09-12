import React from 'react'

const Alert = () => {
    return (
        <div className='alert-styles'>
            <img src={require("../images/alert.png")} alt="" />
        
            <p>
                Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things.<br/> And you'll lose the chance to stay on this plan at the same cost ongoing (regardless of future price increases).
            </p>
        
        </div>
    )
}

export default Alert