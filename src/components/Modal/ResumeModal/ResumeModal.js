import React from 'react';
// import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  useState,
  // useEffect
} from 'react';
import operations from '../../../redux/asyncThunks';
import RatingStars from './ratingStars';
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

import resumeSelectors from '../../../redux/selectors/resume-selectors';

const ResumeModal = ({ toggleModal, bookId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  // useEffect(() => {
  //   dispatch(operations.fetchResume(bookId));
  // }, [dispatch]);

  const resumeText = useSelector(resumeSelectors.getResumeText);
  const ratingStars = useSelector(resumeSelectors.getRaitingStars);

  const inputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'text':
        setText(value);
        break;

      case 'simple-controlled':
        setRating(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(rating);
    dispatch(operations.resume({ bookId, text, rating }));
  };

  return (
    <Content onSubmit={handleSubmit}>
      <Title>Обрати рейтинг книги</Title>
      <Stars>
        {ratingStars ? (
          <RatingStars onChange={ratingStars} />
        ) : (
          <RatingStars onChange={inputChange} />
        )}
      </Stars>
      <Resume>Резюме</Resume>
      {resumeText ? (
        <Textarea
          value={resumeText}
          name="text"
          onChange={inputChange}
        ></Textarea>
      ) : (
        <Textarea
          value={text}
          name="text"
          onChange={inputChange}
          placeholder="..."
        ></Textarea>
      )}
      <Buttons>
        <Back onClick={toggleModal} type="button">
          Назад
        </Back>
        <Save type="submit">Зберегти</Save>
      </Buttons>
    </Content>
  );
};

export default ResumeModal;
