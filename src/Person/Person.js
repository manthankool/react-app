import React from 'react';

//children are the element placed between the opening and closing tags of Components in APP.js, they could be wither ul or li or other components also

const Person = (props) => {
  return(
    <div className="Person">
      <p onClick={props.click}>{props.subadmin} is great and he is just {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>

  );
};


export default Person;
