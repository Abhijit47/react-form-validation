import React, { useState } from 'react';
import { RiCheckDoubleFill, RiCloseFill } from "react-icons/ri";

const FormValidation = () => {
  // const [emailValue, setEmailValue] = useState("");
  // const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const handleEmailChange = (e) => {
    // const regExEmail = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const regExEmail = (/^([a-zA-Z.-]+).([0-9]{0,10}).@([a-zA-Z.-]+).([a-z]{2,10})/);
    let inputEmail = e.target.value;
    console.log(regExEmail.test(inputEmail));

    if (regExEmail.test(inputEmail) === true) {
      setEmailError(true);
    } else if (!regExEmail.test(inputEmail) === true) {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    let inputPass = e.target.value;
    // minimum should be 6 character
    // should contain alphanumeric character
    // should contain Special character
    // First character should be Capital

    console.log(inputPass);
    const regExPass = (/^[A-Za-z\d@$!%*?&]{8}$/);
    console.log(regExPass.test(inputPass));

    if (regExPass.test(inputPass) === true) {
      setPasswordError(true);
    } else if (!regExPass.test(inputPass) === true) {
      setPasswordError(false);
    }
  };

  const handleShowPassword = (e) => {
    let inputType = e.target.parentElement.childNodes[0].type;
    if (inputType === "password") {
      setShowPassword('text');
    } else if (inputType === "text") {
      setShowPassword('password');
    }
  };

  return (
    <>
      <h1 className='text-center bg-dark text-light rounded-3 pb-2 shadow-sm'>Form Validation</h1>
      <div className='bg-dark-subtle bg-gradient p-3 shadow-sm rounded-3'>
        {/* Input Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            className='form-control'
            type={"email"}
            name="email"
            id='email'
            placeholder="Enter your email"
            required
            onChange={handleEmailChange}
          />
        </div>
        {/* Conditional show message */}
        <div>
          <ul className='navbar-nav align-items-center'>
            {
              emailError
                ? <li className='nav-item text-center hstack justify-content-center gap-1 mt-2'>
                  <RiCheckDoubleFill className='fs-4 mb-0 text-success' />
                  <p className='mb-0 text-success'>Email valid</p>
                </li>
                : <li className='nav-item text-center hstack justify-content-center gap-1 mt-2'>
                  <RiCloseFill className='fs-4 mb-0 text-danger' />
                  <p className='mb-0 text-danger'>Email must be valid</p>
                </li>
            }

          </ul>
        </div>

        {/* Input Password */}
        <div>
          <label htmlFor="password">Password</label>
          <div className='hstack'>
            <input
              type={showPassword}
              className="form-control"
              id="password"
              aria-describedby="password"
              placeholder='Enter your password'
              required
              onChange={handlePasswordChange} />
            <button className="input-group-text" id="password" onClick={handleShowPassword} >
              {showPassword === "password"
                ? "Show"
                : "Hide"}
            </button>
          </div>
        </div>
        {/* Conditional show message */}
        <div>
          <ul className='navbar-nav'>
            {
              passwordError
                ?
                (
                  <>
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCheckDoubleFill className='text-success' />
                      <p className='mb-0 text-success'>Minimum of 8 character length</p>
                    </li>
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCheckDoubleFill className='text-success' />
                      <p className='mb-0 text-success'>Contains Alphanumeric character</p>
                    </li>
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCheckDoubleFill className='text-success' />
                      <p className='mb-0 text-success'>Contains Special character like(*,!,@,#,$.etc)</p>
                    </li >
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCheckDoubleFill className='text-success' />
                      <p className='mb-0 text-success'>First character will be Capital</p>
                    </li>
                  </>

                ) : (
                  <>
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCloseFill className='text-danger' />
                      <p className='mb-0 text-danger'>Minimum of 8 character length</p>
                    </li>
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCloseFill className='text-danger' />
                      <p className='mb-0 text-danger'>Contains Alphanumeric character</p>
                    </li>
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCloseFill className='text-danger' />
                      <p className='mb-0 text-danger'>Contains Special character like(*,!,@,#,$.etc)</p>
                    </li >
                    <li className='nav-item hstack gap-1 mt-2'>
                      <RiCloseFill className='text-danger' />
                      <p className='mb-0 text-danger'>First character should be Capital</p>
                    </li>
                  </>
                )
            }
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <button className='btn btn-outline-warning' type='submit'>Sign up</button>
      </div>
    </>
  );
};

export default FormValidation;