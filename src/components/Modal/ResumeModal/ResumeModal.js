import React from 'react';
import RaitingStars from './raitingStars';
import {
  Title,
  Content,
  Stars,
  Resume,
  Textarea,
  Buttons,
  Back,
  Save,
} from './ResumeModal.styled';

const ResumeModal = ({ toggleModal }) => {
  return (
    <Content>
      <Title>Choose rating of the book</Title>
      <Stars>
        <RaitingStars />
      </Stars>
      <Resume>Resume</Resume>
      <Textarea placeholder="..."></Textarea>
      <Buttons>
        <Back onClick={toggleModal} type="button">
          Back
        </Back>
        <Save type="submit">Save</Save>
      </Buttons>
    </Content>
  );
};

export default ResumeModal;
