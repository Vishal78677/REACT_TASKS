import * as Yup from 'yup';


export const calSchema = Yup.object({

    num1: Yup.number().required("Please enter value..."),
    num2: Yup.number().required("Please enter value..."),
    select: Yup.string().required("Please select any..."),
    


})