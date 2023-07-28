import React, { useState } from "react";
import "./Login.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldComp from "../TextField/TextField";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/auth/auth.actions";
import { toggleLogin, closeLogin } from "../../store/auth/auth.reducers";
import CloseIcon from '@mui/icons-material/Close';


const Login = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, error, showLogin } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(true);

    const handleLogin = async(credentials) => {
        try {
            setIsLoading(true)
            await dispatch(loginUser(credentials))
            setIsLoading(false)
            dispatch(toggleLogin())
        } catch(err) {
            setIsLoading(false)
        }
    }

    const handleCloseLogin = () => {
        dispatch(closeLogin());
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email address is required"),

          password: Yup.string()
            .required("Password is required")
    })

    return(
        <div>
            {!isAuthenticated && showLogin &&
          <div className="form-comp">
            <div className="form-wrapper">
              <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}
                validateOnBlur
                onSubmit={ async(value) => {
                    const { email, password } = value;
                    await handleLogin({ username: email, password })
                }}
              >
                <Form className="base-form">
                <CloseIcon className="close-login" onClick={handleCloseLogin} />
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
                  <button className="sign-in" type="submit"  >SIGN IN</button>
                  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <h3>NOT A MEMBER?</h3>
                  </div>
                    <button className="register">REGISTER</button>
                </Form>
              </Formik>
            </div>
          </div>}
          {/* isAuthenticated && <Cart /> */}
        </div>
    )
}

export default Login;