import { useState } from 'react';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Button,
} from './Select.styled';
export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const options = ['Mangoes', 'Apples', 'Oranges'];
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || 'Mangoes'}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)}>{option}</ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
      <Button>Додати</Button>
    </DropDownContainer>
  );
};
