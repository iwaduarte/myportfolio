import React from 'react';
import style from './Tag.module.css';

const { tag, text } = style;
function setDynamicTextColor(bgColor) {
  if (!bgColor) return;

  const red = parseInt(bgColor.substring(1, 3), 16);
  const green = parseInt(bgColor.substring(3, 5), 16);
  const blue = parseInt(bgColor.substring(5, 7), 16);
  console.log(red);
  // Calculate the brightness of the background color
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  // Set the text color based on the brightness
  if (brightness < 128) {
    return 'white';
  }
  return 'black';
}
const Tag = ({ name, backgroundColor, margin }) => {
  const color = setDynamicTextColor(backgroundColor) || 'black';

  return (
    <button className={tag} title={name} style={{ backgroundColor, margin }}>
      <span style={{ color }} className={text}>
        {name}
      </span>
    </button>
  );
};

export default Tag;
