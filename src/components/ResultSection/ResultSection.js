import { ReactComponent as Polygon } from '../../image/svg/Polygon.svg';

import {
  Title,
  Text,
  Section,
  AddResult,
  Labels,
  Label,
  Pages,
  ButtonCalendar,
  ButtonSection,
  ButtonIcon,
  Button,
  Statistic,
} from './ResultSection.styled';

export default function ResultSection() {
  return (
    <Section>
      <Title>RESULT</Title>
      <AddResult>
        <Labels>
          <ButtonCalendar>
            <Text>Date</Text>
            <ButtonIcon type="button" IconComponent={Polygon}></ButtonIcon>
          </ButtonCalendar>
          <Label>
            <Text>Amount of pages</Text>
            <Pages />
          </Label>
        </Labels>
        <ButtonSection>
          <Button type="submit">Add Result</Button>
        </ButtonSection>
      </AddResult>
      <Statistic>STATISTIC</Statistic>
    </Section>
  );
}
