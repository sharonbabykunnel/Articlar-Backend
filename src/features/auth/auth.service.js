import CustomError from '../../helpers/customError.js';
import * as authR from './auth.repository.js'

export async function signup(values) {
    if (!values.email || !values.password || !values.number) throw new CustomError("Email, Number and Password are required", 400, 'VALIDATION_ERROR');
    const existingUser = await authR.findByEmail(values.email);
    if (existingUser) throw new CustomError("User allready exists", 400, 'USER_ALLREADY_EXISTS');
    const existingNumber = await authR.findByNumber(values.number);
    if(existingNumber) throw new CustomError("Number is allredy exist. Login using the number.", 400, 'USER_ALLREADY_EXISTS')
    const response = await authR.createUser(values);
    console.log(response,'response')
    return response;
}

export async function signin(credential, password) {
    if (!credential || !password) throw new CustomError("Credential and Password are required", 400, "VALIDATION_ERROR");
    const isNumeric = !isNaN(credential) && !isNaN(parseFloat(credential));
    const parsedCredential = isNumeric ? Number(credential) : credential;
    let user;
    if (typeof parsedCredential === 'number') { 
        user = await authR.findByNumber(parsedCredential);
    } else {
        user = await authR.findByEmail(parsedCredential)
    }
    if (!user) throw new CustomError("User not found", 404);
    const verify = await authR.verifyPassword(password, user.password);
    console.log(credential, password,user,verify);
    if (!verify) {
        throw new CustomError("Incorrect password", 401);
    }
    return user;
}

export async function setPreferences(preferences,id) {
    if (!preferences) throw new CustomError("Preferences are required", 400, "VALIDATION_ERROR");
    const response = await authR.setPreferences(preferences,id)
    console.log(response);
    if (!response) throw new CustomError("User not found", 404);
    return response;
}
