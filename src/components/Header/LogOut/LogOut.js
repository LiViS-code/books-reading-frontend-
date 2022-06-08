import React from 'react';
import { Button, Text, Div, Gabionade } from './LogOut.styled';
import iconlogout from '../../../image/svg/iconlogout.svg';

export default function LogOut() {
  return (
    <Div>
      <Gabionade src={iconlogout} alt="icon logout" />
      <Button>
        <Text>Вихід</Text>
      </Button>
    </Div>
  );
}
