import asyncHadler from 'express-async-handler'
import CustomError from '../../helpers/customError.js'
import handleError from '../../middlewares/errorHadler.js'
import * as homeSer from './home.service.js'

export const getArticle = asyncHadler(async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const response = await homeSer.getArticle(id);
        res.status(200).json({success:true, data:response})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})

export const getMyArticle = asyncHadler(async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const response = await homeSer.getMyArticle(id);
        res.status(200).json({success:true, data:response})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})

export const postArticle = asyncHadler(async (req, res) => {
    try {
        const { text, files, userId, category, title } = req.body;
        console.log(text,files,category,userId,title)
        const response = await homeSer.postArticle(text, files, userId, category,title);
        res.status(200).json({success:true, data:response})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})

export const editArticle = asyncHadler(async (req, res) => {
    try {
        const { text, files, id, category, title } = req.body;
        console.log(text, files, category, id, title);
        const response = await homeSer.editArticle(text, files, id, category, title);
        res.status(200).json({success:true, data:response})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})

export const likeArticle = asyncHadler(async (req, res) => {
    try {
        const { userId } = req.body;
        const { id } = req.params;
        const response = await homeSer.likeArticle(userId, id);
        res.status(200).json({success:true, data:response})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})

export const removeArticle = asyncHadler(async (req, res) => {
    try {
        const { userId } = req.body;
        const { id } = req.params;
        const response = await homeSer.removeArticle(userId, id);
        res.status(200).json({success:true, data:response,message:'Article Blocked'})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})

export const deleteArticle = asyncHadler(async (req, res) => {
    try {
        const { id } = req.params;
        const response = await homeSer.deleteArticle( id);
        res.status(200).json({success:true, data:response,message:'Post Deleted'})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})