import React from 'react';

const Comments = ({setChoice}) => {
  return (
    <div
        className='comments'
    >
      <button
        onClick={() => {
          setChoice("/comments")
        }}
      >
        Comments
      </button>
    </div>
  );
}

export default Comments;
