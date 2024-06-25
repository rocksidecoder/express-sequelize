import models from '../models/index.model.js'
const { Users } = models;

import { getImage, removeImage } from '../utils/multer.util.js';
import { getSuccessResponse } from '../utils/response.util.js';

/**
 * Get user profile   ->  /api/v1/user
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {object} next Next function
 * @returns User details
 */
export const getProfile = async (req, res, next) => {
    try {
        const { user: { name, email, profilePicture } } = req;
        let profile = null;
        
        if(profilePicture) profile = await getImage(profilePicture);

        return res.status(200).json(
            getSuccessResponse(
                'User profile get successfully',
                { name, email, profile }
            )
        )

    } catch (error) {
        next(error)
    }
}


/**
 * Update user profile   ->  /api/v1/user
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {object} next Next function
 * @returns User profile update successfully
 */
export const updateProfile = async (req, res, next) => {
    try {
        const { user, body, file } = req;
        const { id, profilePicture } = user;

        // remove old file
        if (file?.filename) {
            await removeImage(profilePicture)
            body.profilePicture = file.filename
        }

        // update user profile
        await Users.update(body, { where: { id } })

        return res.status(201).json(
            getSuccessResponse("User profile update successfully")
        );

    } catch (error) {
        next(error)
    }
}