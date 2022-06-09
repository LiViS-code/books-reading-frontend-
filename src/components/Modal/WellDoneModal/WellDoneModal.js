import React from 'react';
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

const WellDoneModal = ({ toggleWellDoneModal }) => {
  return (
    <WellDoneContent>
      <Svg>
        <Icon src={`${images}#icon-good`} alt="trumb up" width="44"></Icon>
      </Svg>
      <Text>
        Well done! but you need to be a little bit faster. You can do it
      </Text>
      <Buttons>
        <NewTraining type="submit">New training</NewTraining>
        <Back onClick={toggleWellDoneModal} type="button">
          Back
        </Back>
      </Buttons>
    </WellDoneContent>
  );
};

export default WellDoneModal;
