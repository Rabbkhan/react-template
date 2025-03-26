import React from 'react';
import './Users.scss'
import IMAGE1 from '../assets/images/favicon.png'
import IMAGE2 from '../assets/images/test.svg'


interface UsersProps {}

const Users: React.FC<UsersProps> = ({}) => {
  return <div>

<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis harum officiis amet qui eos!
</p>
    
    <div>
        <img src={IMAGE1} alt='text image' width={300} height={300} />
        <img src={IMAGE2} alt='text image 2' width={300} height={300} />

    </div>
  </div>;
};

export default Users;
