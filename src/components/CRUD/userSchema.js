import * as Yup from 'yup'


const userSchema = Yup.object({
    
    firstName: Yup.string().min(2, "minimum 2 latter is required").required("Please enter your name"),
    userName: Yup.string().min(2,"minimum 2 latter is required").required("Please enter your user name"),
    email: Yup.string().email().required("Please enter your email"),
    gender: Yup.string().required("Please select your gender"),
    status: Yup.string().required('Select status'),
    dob: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required("Please select your date"),
    // city: Yup.string().required("Please select the city "),
    country: Yup.string().required("Please select your country"),
    password: Yup.string().min(6, 'password must be 6 character').required("Please enter your password"),
    co_password: Yup.string().required("Please re-type your password").oneOf([Yup.ref("password")], "Passwords does not match"),
    check: Yup.bool().oneOf([true], "Please you need to accept terms and conditios"), 
})

export default userSchema;