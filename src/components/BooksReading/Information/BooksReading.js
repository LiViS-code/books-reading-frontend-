import React from 'react';
import { Link } from 'react-router-dom';
import vector from '../../../image/svg/vector1.svg';

import {
  Body,
  Main,
  Title,
  First,
  Text,
  Second,
  Image,
  Button,
  Buttons,
} from './BookReading.styled';

export default function BooksReading({ loggined }) {
  return (
    <Body>
      <Main>Books Reading</Main>

      <Title>Will help you too</Title>
      <First>
        <Text>
          <Image src={vector} alt="vector" />
          Create your goal faster and proceed to read
        </Text>
        <Text>
          <Image src={vector} alt="vector" />
          Divide process proportionally for each day
        </Text>
        <Text>
          <Image src={vector} alt="vector" />
          Track your success
        </Text>
      </First>

      <Title>You may also</Title>
      <Second>
        <Text>
          <Image src={vector} alt="vector" />
          Pose your own independent point of view
        </Text>
        <Text>
          <Image src={vector} alt="vector" />
          Improve your professional skills according to new knowledge
        </Text>
        <Text>
          <Image src={vector} alt="vector" />
          Become an interesting interlocutor
        </Text>
      </Second>
      <Buttons>
        {loggined ? (
          <Link to="/">Home</Link>
        ) : (
          <>
            <Button to="login">Log in</Button>
            <Button to="register">Register</Button>
          </>
        )}
      </Buttons>
    </Body>
  );
}
