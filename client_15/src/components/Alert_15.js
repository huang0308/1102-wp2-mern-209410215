import React from 'react'

import {useAppContext}from'../context/appContext_15'

const Alert_15 = () => {
    const {alertText,alertType}=useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default Alert_15
