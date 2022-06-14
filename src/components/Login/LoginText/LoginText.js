import {
  FormTextContainer,
  Quotes,
  QuotesText,
  Title,
} from './LoginText.styled';

const LoginText = () => {
  return (
    <>
      <FormTextContainer>
        <Quotes>“</Quotes>
        <QuotesText>
          Книги — кораблі думки, які плавають по хвилях часу i несуть свій
          дорогоцінний вантаж від покоління до покоління.
        </QuotesText>
        <Title>Бeкон Ф.</Title>
      </FormTextContainer>
    </>
  );
};
export default LoginText;
