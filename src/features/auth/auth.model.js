import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required:true,
    },
    preferences:[]
}, {
    timestamps:true,
})

userSchema.pre("save", async function (next) {
    try {
        console.log(this.isModified('password'),'cheking')
        if (!this.isModified("password")) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next()
    } catch (error) {
        next(error)
    }
});

export default mongoose.model('User', userSchema);