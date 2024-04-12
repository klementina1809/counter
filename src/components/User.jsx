import React from 'react'

function User({name, money, onDelete}) {
  return (
    <div className='user'>
      <span>{name}</span>
      <span>{money}</span>
      <button onClick={onDelete(name)}>x</button>
    </div>
  )
}

export default User
