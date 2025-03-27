import React, { useState } from 'react'
import './Users.scss'
import IMAGE1 from '../assets/images/favicon.png'
import IMAGE2 from '../assets/images/test.svg'

interface UsersProps {}

const Users: React.FC<UsersProps> = ({}) => {
  const [number, setNumber] = useState(0)

  return (
    <div className="users-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis
        harum officiis amet qui eos!
      </p>

      <p>{process.env.REACT_APP}</p>

      <div className="image-container">
        <img src={IMAGE1} alt="text image" />
        <img src={IMAGE2} alt="text image 2" />
      </div>

      <div className="button-container">
        <button onClick={() => setNumber((num) => num + 1)}>Click Me</button>
        <button>{number}</button>
      </div>
    </div>
  )
}

export default Users
