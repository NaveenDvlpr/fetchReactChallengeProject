import React from 'react';

const Posts = ({setChoice}) => {
  return (
    <div
        className='posts' 
    >
      <button
        onClick={()=> {
          setChoice("/posts");
        }}
      >
        Posts
      </button>
    </div>
  );
}

export default Posts;
