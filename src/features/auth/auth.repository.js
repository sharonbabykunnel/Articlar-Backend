import User from './auth.model.js'
import bcrypt from 'bcrypt'

export async function findByEmail(email) {
    return await User.findOne({ email });
}

export async function findByNumber(number) {
    return await User.findOne({ number });
}

export async function createUser(values) {
    return await User.create(values);
}

export async function verifyPassword(inputPassword, password) {
    return await bcrypt.compare(inputPassword, password);
}

export async function setPreferences(preferences, id) {
    return await User.findByIdAndUpdate(id, {$set:{preferences}},{new:true})
}