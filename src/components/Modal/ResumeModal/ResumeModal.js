import React from 'react';
import { useFormik } from 'formik';
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
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: values => {
      console.log(values);
      // dispatch();
    },
  });
  return (
    <Content onSubmit={formik.handleSubmit}>
      <Title>Обрати рейтинг книги</Title>
      <Stars>
        <RaitingStars onChange={formik.handleChange} />
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
