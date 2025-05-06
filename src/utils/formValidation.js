import { isValidPhoneNumber } from 'libphonenumber-js';


export const isValidString = (value) => {
    return /[a-zA-Z]/.test(value)
}

export const isEmpty = (value) => {
    return value.trim() == ''
}

export const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export const isValidMobileNumber = (phoneNumber, countryCode) => {
    return isValidPhoneNumber(phoneNumber, countryCode)
}

export const isValidPassword = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
    return regex.test(value)
}

export const isPasswordMatch = (value1, value2) => {
    return value1 == value2
}