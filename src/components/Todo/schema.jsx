import * as Yup from  'yup';

export const todoSchema = Yup.object({
    todo: Yup.string().required("Please write something...")
})