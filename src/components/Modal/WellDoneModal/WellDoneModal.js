import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Back,
  NewTraining,
  WellDoneContent,
  Text,
  Svg,
  Icon,
  Buttons,
} from './WellDoneModal.styled';
import images from '../../../image/svg/symbol-defs.svg';
import { startNewTraining } from '../../../redux/books/books-operations';

const WellDoneModal = ({ toggleWellDoneModal, text }) => {
  const dispatch = useDispatch();
  const newTraining = () => {
    dispatch(startNewTraining());
  };

  return (
    <WellDoneContent>
      <Svg>
        <Icon width={50} height={45}>
          <use href={`${images}#icon-good`} alt="trumb up"></use>
        </Icon>
      </Svg>
      <Text>{text}</Text>
      <Buttons>
        <NewTraining
          type="submit"
          onClick={() => {
            newTraining();
            toggleWellDoneModal(false);
          }}
        >
          Нове тренування
        </NewTraining>
        <Back onClick={() => toggleWellDoneModal(false)} type="button">
          Назад
        </Back>
      </Buttons>
    </WellDoneContent>
  );
};

export default WellDoneModal;
