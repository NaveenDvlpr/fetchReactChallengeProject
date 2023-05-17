import React from 'react';

const Content = ({content}) => {


  return (
    <ul
      className="list"
    >
      {content.map((data) => (
        <li key={data.id}>
          {JSON.stringify(data)}
        </li>
      ))}
    </ul>
  );
}

export default Content;
