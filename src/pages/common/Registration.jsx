import React, { useEffect, useState } from "react";
import ThemeToggle from "../../components/commen/ThemeToggle";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import google_icon from "../../assets/image/google.png";
import {
  isEmpty,
  isValidEmail,
  isValidMobileNumber,
  isValidPassword,
  isValidString,
} from "../../utils/formValidation";
import { PiCheckCircleFill } from "react-icons/pi";
import tutorSideImage from "../../assets/image/tutor_teach_student.png";
import studentSideImage from "../../assets/image/student_stand_books.png";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../feature/auth/registerSlice";
import { EMAIL, NETWORK } from "../../constants/constants";
import { ScaleLoader } from "react-spinners";
import useTheme from "../../hook/useTheme";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setOtpEmail } from "../../feature/auth/registerOtpSlice";
import { useNavigate } from "react-router-dom";


const registerSwal = withReactContent(Swal)


// This Registration page use both Tutor and Student
const Registration = ({ role }) => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryCode, setCountyCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  // const [role, setRole] = useState('')
  // const [roleError, setRoleError] = useState('')
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [confromPasswordMessage, setConformPasswordMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    username: false,
    email: false,
    phone_number: false,
    country_code: false,
    role: true,
    password: false,
    conform_password: false,
  });
  const dispatch = useDispatch();
  const { isRegisterLoading } = useSelector((state) => state.register);
  const [theme, setTheme] = useTheme();
  const navigate = useNavigate()

  useEffect(() => {
    setIsFormValid(
        formData.username == true &&
        formData.email == true &&
        formData.phone_number == true &&
        formData.role == true &&
        formData.password == true &&
        formData.conform_password == true
    );
  }, [formData]);

  // Username handler
  const onUsernameChange = (e) => {
    const { name, value } = e.target;
    if (isEmpty(value)) {
      setUsernameError("Username cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    if (!isValidString(value)) {
      setUsernameError("Username must contain at least one letter!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    setUsernameError("");
    setUsername(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: true,
    }));
    return;
  };

  // Email handler
  const onEmailChange = (e) => {
    const { name, value } = e.target;
    if (isEmpty(value)) {
      setEmailError("E-mail cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    if (!isValidEmail(value)) {
      setEmailError("Please enter a valid email address!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    setEmailError("");
    setEmail(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: true,
    }));
    return;
  };

  // Phone number handler
  const onphoneNumberChange = (phone, countryData) => {
    if (isEmpty(phone)) {
      setPhoneNumberError("Phone number cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        phone_number: false,
      }));
      return;
    }
    if (!isValidMobileNumber(`+${phone}`)) {
      setPhoneNumberError("Please enter a valid phone number!");
      setFormData((prevData) => ({
        ...prevData,
        phone_number: false,
      }));
      return;
    }
    setPhoneNumberError("");
    setCountyCode(countryData.dialCode);
    setPhoneNumber(`+${phone}`);
    setFormData((prevData) => ({
      ...prevData,
      phone_number: true,
    }));
    return;
  };

  // Password handler
  const onPasswordChange = (e) => {
    const { name, value } = e.target;
    if (isEmpty(value)) {
      setPasswordError("Password cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    if (!isValidPassword(value)) {
      setPasswordError("Use 6–8 chars with letter, number & symbol!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    setPasswordError("");
    setPassword(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: true,
    }));
    return;
  };

  // Conform password handler
  const onConformPasswordChange = (e) => {
    const { name, value } = e.target;
    if (isEmpty(value)) {
      setConformPasswordMessage("Conform password cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    if (!password || password != value) {
      setConformPasswordMessage("Passwords do not match!");
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
      return;
    }
    setConformPasswordMessage("Matched");
    setConformPassword(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: true,
    }));
    return;
  };

  // handle form submit
  const onFormSubit = async (e) => {
    e.preventDefault();

    // --Final validation--
    // -Username validation
    if (isEmpty(username)) {
      setUsernameError("Username cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        username: false,
      }));
      return;
    }
    if (!isValidString(username)) {
      setUsernameError("Username must contain at least one letter!");
      setFormData((prevData) => ({
        ...prevData,
        username: false,
      }));
      return;
    }

    // -E-mail validation
    if (isEmpty(email)) {
      setEmailError("E-mail cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        email: false,
      }));
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address!");
      setFormData((prevData) => ({
        ...prevData,
        email: false,
      }));
      return;
    }

    // -Phone number validation
    if (isEmpty(phoneNumber)) {
      setPhoneNumberError("Phone number cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        phone_number: false,
      }));
      return;
    }
    if (!isValidMobileNumber(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number!");
      setFormData((prevData) => ({
        ...prevData,
        phone_number: false,
      }));
      return;
    }

    // -Password validation
    if (isEmpty(password)) {
      setPasswordError("Password cannot be empty!");
      setFormData((prevData) => ({
        ...prevData,
        password: false,
      }));
      return;
    }
    if (!isValidPassword(password)) {
      setPasswordError("Use 6–8 chars with letter, number & symbol!");
      setFormData((prevData) => ({
        ...prevData,
        password: false,
      }));
      return;
    }

    const formData = {
      'username': username,
      'email': email,
      'country_code': countryCode,
      'phone_number': phoneNumber,
      'role': role,
      'password': password,
    };

    // Registration API call
    try {
      const response = await dispatch(registerThunk(formData)).unwrap();
      console.log(theme)
      registerSwal.fire({
        text: response.message,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
        color: theme == 'dark' ? "#d5e1fe" : '#00010f',
      }).then((res) => {
        dispatch(setOtpEmail(response.email))
        navigate('/otp')
      })
    } catch (error) {
      if (error.error_mark == EMAIL) {
        setEmailError(error.message);
        setFormData((prevData) => ({
          ...prevData,
          email: false,
        }));
      }

      if(error.error_mark == NETWORK) {
        registerSwal.fire({
          text: error.message,
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
          color: theme == 'dark' ? "#d5e1fe" : '#00010f',
        })
      }
    }
  };

  return (
    <div className="relative w-full pb-[50px] lg:pb-0 lg:h-screen flex justify-center items-center bg-white dark:bg-dark-blue-800">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row gap-y-[50px]">
        <div className="w-full lg:w-[55%] h-full flex justify-center">
          <img
            src={role == "tutor" ? tutorSideImage : studentSideImage}
            className="w-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full h- lg:w-[45%] h-full flex justify-center items-center">
          <div className="border-[1px] border-gray-400 rounded-md px-4 py-5 space-y-4">
            <h1 className="text-black-900 dark:text-white-900 font-semibold text-2xl">
              Register
            </h1>

            {/* form */}
            <form action="" onSubmit={onFormSubit}>
              {/* input fields */}
              <div className="space-y-2 pb-[30px]">
                {/* Username */}
                <div className="flex flex-col">
                  {usernameError ? (
                    <p className="text-[13px] text-error">{usernameError}</p>
                  ) : (
                    <label
                      className="text-[13px] text-gray-500 dark:text-gray-400"
                      htmlFor="username"
                    >
                      Username
                    </label>
                  )}

                  <input
                    className="text-black dark:text-white-900 border-[1px] border-gray-800 dark:border-gray-500 outline-none focus:border-gray-400 dark:focus:border-white-900 rounded-sm py-1 px-2"
                    type="text"
                    id="username"
                    name="username"
                    onChange={onUsernameChange}
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col">
                  {emailError ? (
                    <p className="text-[13px] text-error">{emailError}</p>
                  ) : (
                    <label
                      className="text-[13px] text-gray-500 dark:text-gray-400"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                  )}
                  <input
                    className="text-black dark:text-white-900 border-[1px] border-gray-800 dark:border-gray-500 outline-none focus:border-gray-400 dark:focus:border-white-900 rounded-sm py-1 px-2"
                    type="email"
                    id="email"
                    name="email"
                    onChange={onEmailChange}
                  />
                </div>

                {/* Phone number */}
                <div className="flex flex-col">
                  {phoneNumberError ? (
                    <p className="text-[13px] text-error">{phoneNumberError}</p>
                  ) : (
                    <label
                      className="text-[13px] text-gray-500 dark:text-gray-400"
                      htmlFor="email"
                    >
                      Phone number
                    </label>
                  )}
                  <PhoneInput
                    country={"in"}
                    onChange={(phone, countryData) => {
                      onphoneNumberChange(phone, countryData);
                    }}
                    inputClass="!text-black dark:!text-white-900 !border-[1px] !bg-white dark:!bg-dark-blue-800 !border-gray-800 dark:!border-gray-500 !outline-none focus:!border-gray-400 dark:focus:!border-white-900 !rounded-sm"
                    buttonClass="!border-[1px] !bg-white dark:!bg-dark-blue-800 !border-gray-800 dark:!border-gray-500 !outline-none focus:!border-gray-400 dark:focus:!border-white-900 dark:hover:!bg-dark-blur-700 hover:bg-gray-300"
                  />
                </div>

                {/* Role */}
                {/* <div className=''>
                    {
                      roleError ? 
                      <p className='text-[13px] text-error'>{roleError}</p>
                      :
                      <label className='text-[13px] text-gray-500 dark:text-gray-400' htmlFor="email">Register as</label>
                    }
                  <div className='flex space-x-4'>
                    <div className='space-x-1.5'>
                      <input 
                      type="checkbox" id='student' name='role' checked={role == 'student'} 
                      value='student' onChange={onRoleChange}/>
                      <label className='text-sm dark:text-white-900' htmlFor="student">Student</label>
                    </div>
                    <div className='space-x-1.5'>
                      <input 
                      type="checkbox" id='tutor' name='role' checked={role == 'tutor'} 
                      value='tutor' onChange={onRoleChange}/>
                      <label className='text-sm dark:text-white-900' htmlFor="tutor">Tutor</label>
                    </div>
                  </div>
                </div> */}

                {/* password */}
                <div className="flex flex-col">
                  {passwordError ? (
                    <p className="text-[13px] text-error">{passwordError}</p>
                  ) : (
                    <label
                      className="text-[13px] text-gray-500 dark:text-gray-400"
                      htmlFor="email"
                    >
                      Password
                    </label>
                  )}
                  <input
                    className="text-black dark:text-white-900 border-[1px] border-gray-800 dark:border-gray-500 outline-none focus:border-gray-400 dark:focus:border-white-900 rounded-sm py-1 px-2"
                    type="password"
                    id="password"
                    name="password"
                    onChange={onPasswordChange}
                  />
                </div>

                {/* conform password */}
                <div className="flex flex-col">
                  {confromPasswordMessage ? (
                    <p
                      className={`text-[13px] flex items-center ${
                        confromPasswordMessage == "Matched"
                          ? "text-success"
                          : "text-error"
                      }`}
                    >
                      {confromPasswordMessage}
                      {confromPasswordMessage == "Matched" && (
                        <span className="ml-1">{<PiCheckCircleFill />}</span>
                      )}
                    </p>
                  ) : (
                    <label
                      className="text-[13px] text-gray-500 dark:text-gray-400"
                      htmlFor="email"
                    >
                      Conform password
                    </label>
                  )}
                  <input
                    className="text-black dark:text-white-900 border-[1px] border-gray-800 dark:border-gray-500 outline-none focus:border-gray-400 dark:focus:border-white-900 rounded-sm py-1 px-2"
                    type="password"
                    id="conform_password"
                    name="conform_password"
                    onChange={onConformPasswordChange}
                    onBlur={() => setConformPasswordMessage("")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`relative py-1.5 bg-light-blue-700 rounded-md w-full text-white ${
                    isFormValid ? "cursor-pointer " : "cursor-not-allowed"
                  }`}
                >
                  {isRegisterLoading ? (
                    <ScaleLoader height={15} width={3} color="#FFFFFF" />
                  ) : (
                    "Register"
                  )}

                  <span
                    className={`absolute bg-[#0001068f] top-0 left-0 right-0 bottom-0 rounded-md ${
                      isFormValid ? "hidden" : "visible"
                    }`}
                  ></span>
                </button>
              </div>

              {/* Google signin button */}
              <div className="pt-[30px] border-t-[1px] border-gray-400 dark:border-gray-500">
                <div className="flex border-2 cursor-pointer border-gray-700 rounded-md py-1.5 justify-center space-x-3 items-center">
                  <span>
                    <img className="w-[18px]" src={google_icon} alt="" />
                  </span>
                  <p className="text-sm text-black dark:text-white-900">
                    SignIn with Google
                  </p>
                </div>
              </div>
            </form>
            <div className="w-full text-center mt-[40px]">
              <p className="text-sm font-[500] text-black-900 dark:text-white-900">
                I already have account ?
                <span className="text-sm text-light-blue-800 font-[500] cursor-pointer">
                  {" "}
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
