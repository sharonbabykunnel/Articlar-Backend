import CustomError from '../../helpers/customError.js'
import * as profileRep from './profile.repository.js'

export async function changePassword(password, newPassword, userId) {
    if (!password || !newPassword || !userId) throw new CustomError("Can't set password, try later",500);
    const user = await profileRep.findUser(userId);
    if (!user) throw new CustomError("User not found", 404);
    const verify = await profileRep.verifyPassword(password, user.password);
    if (!verify) throw new CustomError("Incorrect password", 401);
    const response = await profileRep.changePassword(newPassword, userId);
    console.log(user,verify,response)
    if (!response) throw new CustomError("User not found", 404);
    return response;
};

export async function changeProfile(profile,id) {
    if (!profile || !id) throw new CustomError("Profile details is missing, please try again.",500);
    const user = await profileRep.findUser(id);
    if (!user) throw new CustomError("User not found", 404);
    const response = await profileRep.changeProfile(profile, id);
    console.log(response)
    if (!response) throw new CustomError("User not found", 404);
    return response;
};

export async function changePreferences(preferences,id) {
    if (!preferences || !id) throw new CustomError("Preferences is missing, please try again.",500);
    const user = await profileRep.findUser(id);
    if (!user) throw new CustomError("User not found", 404);
    const response = await profileRep.changePreferences(preferences, id);
    console.log(response)
    if (!response) throw new CustomError("User not found", 404);
    return response;
};