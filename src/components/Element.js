import React, { useState } from 'react';
import style from '../../src/components/Element.module.css';

const Element = (props) => {
  const { elemActiv, element } = style;
  const [color, setColor] = useState(false);
  let newElement = React.createRef();

  // const changeState = () => {
  //   setColor(true);
  //   setTimeout(() => {
  //     setColor(false);
  //   }, 1000);
  // };

  const arrayElement = props.state.array.map(() => (
    <div
      ref={newElement}
      onClick={() => props.changeState()}
      className={color ? elemActiv : element}
    ></div>
  ));
  return [arrayElement];
};

export default Element;
