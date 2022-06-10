import React from 'react';
import polygon from '../../image/svg/polygon1.svg';

import {
  Section,
  Button,
  Title,
  Amount,
  ButtonSection,
  Statistic,
  Input,
  Labels,
  Image,
  AddResult,
  Text,
} from './Result.styled';
const nextYear = new Date().getFullYear() + 1;

const responce = {
  startDate: '2022-06-10',
  andDate: '2022-07-10',
  totalPages: 500,
  alreadyRead: 0,
  results: [
    {
      date: '2022-06-10',
      pointResult: 30,
    },
    {
      date: '2022-06-11',
      pointResult: 40,
    },
    {
      date: '2022-06-12',
      pointResult: 50,
    },
    {
      date: '2022-06-12',
      pointResult: 60,
    },
    {
      date: '2022-06-14',
      pointResult: 30,
    },
  ],
};

export default function Result() {
  return (
    <Section>
      <Title>RESULT</Title>
      <AddResult>
        <Amount>
          <Labels>
            <Text for="start" type="date">
              Date
            </Text>
            <Input
              // type="date"
              // id="start"
              // name="trip-start"
              // value="2022-06-09"
              // min="2018-01-01"
              // max="2029-12-31"
              deadline={new Date(nextYear, 0, 1)}
              title="to deadline"
            ></Input>
          </Labels>

          <Labels>
            <Text> Amount of pages</Text>
            <Input responce={responce}></Input>
          </Labels>
        </Amount>

        <ButtonSection>
          <Button>Add result</Button>
        </ButtonSection>
      </AddResult>
      <div>
        <Statistic>STATISTICS</Statistic>
        <Image src={polygon} alt="polygon" />
      </div>
    </Section>
  );
}
