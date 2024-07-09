import React, { useEffect } from 'react'

const Test = () => {

    const buttonClicked = async () => {
      console.log("button clicked")
    }
  return (
    <>
    
    <div>dummy</div>
    <button onClick={buttonClicked}> Create admin</button>
    </>
  )
}

export default Test