// import "./RegisterAccount.scss";
// import { object, string, number, date, InferType } from 'yup';
import { Formik, Field, Form, FastField } from "formik";
import { useState } from "react";
import "./Register.css";
const RegisterAccount = () => {
  const [errorName, setErrorName] = useState("");
  const [errorBirthday, setErrorBirthday] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setPassword] = useState("");

  var validateEmail = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  var validateName = new RegExp(/[a-zA-Z-]+/);
  var validateBirthday = new RegExp(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/);
  var validatePhone = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})/);
  var validateUserName = new RegExp(/^[a-zA-Z0-9]{4,16}$/);
  var validatePassword = new RegExp(/^^[a-zA-Z0-9]{4,16}$/);

  const initialValues = {
    name: "",
    birthday: "",
    email: "",
    phone: "",
    userName: "",
    password: "",
  };
  const register = (values) => {
    console.log(values);
    //handle register...
    console.log(validateEmail.test(values.email));
    if (validateEmail.test(values.email)) {
      setErrorEmail("");
    } else {
      setErrorEmail("Email khong dung dinh dang");
    }
    if (validateName.test(values.name)) {
      setErrorName("");
    } else {
      setErrorName("Name khong dung dinh dang");
    }
    if (validateBirthday.test(values.birthday)) {
      setErrorBirthday("");
    } else {
      setErrorBirthday("Birthday khong dung dinh dang");
    }
    if (validatePhone.test(values.phone)) {
      setErrorPhone("");
    } else {
      setErrorPhone("Phone khong dung dinh dang");
    }
    if (validateUserName.test(values.userName)) {
      setErrorUserName("");
    } else {
      setErrorUserName("Email khong dung dinh dang");
    }
    if (validatePassword.test(values.password)) {
      setPassword("");
    } else {
      setPassword("pass khong dung dinh dang");
    }
  };
  return (
    <div className="register">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => register(values)}
      >
        <Form className="register_form">
          <div className="fields">
            <label htmlFor="Mail"> Mail</label>
            <Field
              className="field_rg"
              id="email"
              name="email"
              placeholder="hieungo300@gmail.com"
            />
          </div>
          <div className="error">{errorEmail && errorEmail}</div>
          <div className="fields">
            <label htmlFor="birthday">Birthday</label>
            <Field
              className="field_rg"
              id="birthday"
              name="birthday"
              placeholder="30092001"
            />
          </div>
          <div className="error">{errorBirthday && errorBirthday}</div>
          <div className="fields">
            <label htmlFor="name">name</label>
            <Field
              className="field_rg"
              id="name"
              name="name"
              placeholder="hieu"
            />
          </div>
          <div className="error">{errorName && errorName}</div>
          <div className="fields">
            <label htmlFor="phone">phone</label>
            <Field
              className="field_rg"
              id="phone"
              name="phone"
              placeholder="0787314023"
            />
          </div>
          <div className="error">{errorPhone && errorPhone}</div>
          <div className="fields">
            <label htmlFor="userName">userName</label>
            <Field
              className="field_rg"
              id="userName"
              name="userName"
              placeholder="hieungo3009"
            />
          </div>
          <div className="error">{errorUserName && errorUserName}</div>
          <div className="fields">
            <label htmlFor="password">password</label>
            <Field
              className="field_rg"
              id="password"
              name="password"
              type="password"
              placeholder=" "
            />
          </div>
          <div className="error">{errorPassword && errorPassword}</div>

          <button type="submit" className="btn_submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterAccount;
