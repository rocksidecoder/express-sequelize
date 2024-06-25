/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for users
 */

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get user profile
 *     tags: [User]
 *     description: Get user profile.
 *     security:
 *          - BearerAuth: []
 *     responses:
 *       200:
 *         description: User profile get successfully
 *       401:
 *         description: Invalid access token!!.
 *       403:
 *         description: Unauthorized access !!.
 */


/**
 * @swagger
 * /api/v1/user:
 *   put:
 *     summary: Update user profile
 *     tags: [User]
 *     description: Update user profile
 *     security:
 *          - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               mobileNumber:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *           required:
 *              - name
 *              - email
 *              - mobileNumber
 *     responses:
 *       200:
 *         description: User profile get successfully
 *       401:
 *         description: Invalid access token!!.
 *       403:
 *         description: Unauthorized access !!.
 */
