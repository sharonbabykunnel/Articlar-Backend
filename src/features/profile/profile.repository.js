import User from "./../auth/auth.model.js";
import bcrypt from "bcrypt";

export async function findUser(id) {
  return await User.findOne({ _id:id });
}

export async function verifyPassword(inputPassword, password) {
  return await bcrypt.compare(inputPassword, password);
}

export async function changePassword(inputPassword, userId) {
    const password = await bcrypt.hash(inputPassword, 10);
    console.log(password)
    return await User.findOneAndUpdate({ _id: userId }, { $set: { password } },{new:true});
}

export async function changeProfile(profile, id) {
    return await User.findOneAndUpdate({ _id: id }, { $set: profile },{new:true});
}

export async function changePreferences(preferences, id) {
    return await User.findOneAndUpdate({ _id: id }, { $set: {preferences} },{new:true});
}
