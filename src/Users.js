import React from 'react';

const Users = ({setChoice}) => {
  return (
    <div
        className='users'
    >
        <button
            autoFocus
            onClick={() => {
              setChoice('/users');
            }}
        >
            Users
        </button>
    </div>
  );
}

export default Users;
