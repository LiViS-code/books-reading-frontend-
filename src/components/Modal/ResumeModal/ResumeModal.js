import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { ratingStars, resume } from '../../../redux/slices/resumeSlice';
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

const ResumeModal = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      text: '',
      'simple-controlled': 0,
    },
    onSubmit: values => {
      console.log(values);
      dispatch(resume(values.text));
      dispatch(ratingStars(values['simple-controlled']));
    },
  });
  return (
    <Content onSubmit={formik.handleSubmit}>
      <Title>Обрати рейтинг книги</Title>
      <Stars>
        <RatingStars onChange={formik.handleChange} />
      </Stars>
      <Resume>Резюме</Resume>
      <Textarea
        value={formik.values.text}
        name="text"
        onChange={formik.handleChange}
        placeholder="..."
      ></Textarea>
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
