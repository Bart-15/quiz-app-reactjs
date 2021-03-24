import React from 'react'

const Start = ({start, setStart}) => {
    return (
      <div className='wrapper'>
       <button onClick={() => setStart(!start)} className="start-button">Start Now!!</button>
      </div>
    )
}

export default Start
