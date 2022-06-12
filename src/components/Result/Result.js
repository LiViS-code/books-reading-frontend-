import React from 'react';

import 'moment/locale/uk';
import {
  Title,
  Text,
  ResultSection,
  AddResult,
  Labels,
  Label,
  Pages,
  ButtonCalendar,
  ButtonSection,
  ButtonIcon,
  Button,
  Statistic,
} from './Result.styled';
import { ReactComponent as Polygon } from '../../image/svg/polygon1.svg';

export default function Result() {
  return (
    <ResultSection>
      <Title>RESULT</Title>
      <AddResult>
        <Labels>
          <ButtonCalendar>
            <Text>Date</Text>
            <ButtonIcon type="button" IconComponent={Polygon}></ButtonIcon>
          </ButtonCalendar>
          <Label>
            <Text>Amount of pages</Text>
            <Pages></Pages>
          </Label>
        </Labels>
        <ButtonSection>
          <Button type="submit">Add Result</Button>
        </ButtonSection>
      </AddResult>
      <Statistic>STATISTIC</Statistic>
    </ResultSection>
  );
}
