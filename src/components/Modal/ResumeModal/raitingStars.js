import * as React from 'react';
import Rating from '@mui/material/Rating';
// import {Raiting} from './raitingStars.styled'

export default function RaitingStars({ onChange }) {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          onChange(event);
          setValue(newValue);
        }}
      />
    </div>
  );
}
