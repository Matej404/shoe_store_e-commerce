import React from "react";
import "./Login.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldComp from "../TextField/TextField";
import { Button } from "@mui/material";

const Login = () => {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email address is required"),

          password: Yup.string()
            .required("Password is required")
    })

    return(
          <div className="formComp">
            <div className="formWrapper">
              <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}
                validateOnBlur
              >
                <Form className="baseForm">
                  <header className="faseFormHeader">
                    <h1 className="baseFormHeading">Sign in</h1>
                  </header>
                  <TextFieldComp 
                    label="Email"
                    name="email"
                    id="email-input"
                  />
                  <TextFieldComp
                    label="Password"
                    name="password"
                    id="password-input" 
                    type="password"
                  />
                  <button className="sign-in">SIGN IN</button>
                  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <h3>NOT A MEMBER?</h3>
                  </div>
                    <button className="register">REGISTER</button>
                </Form>
              </Formik>
            </div>
          </div>
    )
}

export default Login;