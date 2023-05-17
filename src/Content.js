import React from 'react';

const Content = ({content}) => {

  const listItems = content.map(item => <li>{item}</li>);

  return (
    <ul
      className="list"
    >
      {listItems}
    </ul>
  );
}

export default Content;
