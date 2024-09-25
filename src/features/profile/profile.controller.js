import asyncHadler from "express-async-handler";
import * as profielSer from "./profile.service.js";
import handleError from "./../../middlewares/errorHadler.js";
import CustomError from "../../helpers/customError.js";

export const changePassword = asyncHadler(async (req, res) => {
  try {
    const { password, newPassword, userId } = req.body;
    const response = await profielSer.changePassword(password,newPassword,userId);

    res.status(201).json({ success: true, data: response, message: "Password changed successfully."});
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError)
      return handleError(res, error.statusCode, error.message, error.code);
    return handleError(
      res,
      500,
      "An unexpected error occured. Please try again later."
    );
  }
});

export const changeProfile = asyncHadler(async (req, res) => {
  try {
    const { profile, id } = req.body;
    const response = await profielSer.changeProfile(profile,id);

    res.status(201).json({ success: true, data: response, message: "Information changed successfully."});
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError)
      return handleError(res, error.statusCode, error.message, error.code);
    return handleError(
      res,
      500,
      "An unexpected error occured. Please try again later."
    );
  }
});

export const changePreferences = asyncHadler(async (req, res) => {
  try {
    const { preferences, id } = req.body;
    const response = await profielSer.changePreferences(preferences,id);

    res.status(201).json({ success: true, data: response, message: "Preferences changed successfully."});
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError)
      return handleError(res, error.statusCode, error.message, error.code);
    return handleError(
      res,
      500,
      "An unexpected error occured. Please try again later."
    );
  }
});
