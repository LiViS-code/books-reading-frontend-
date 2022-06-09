import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function RaitingStars() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}
