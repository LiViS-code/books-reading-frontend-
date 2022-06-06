import * as yup from 'yup';
import { number } from 'yup';

let addBookSchema = yup.object().shape({
  title: yup.string().required(),
  name: yup.string().required(),
  year: number().typeError().positive().required(),
  pages: number().typeError().positive().required(),
});

export default addBookSchema;
