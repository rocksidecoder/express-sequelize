/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API for authentication
 */

/**
 * @swagger
 * /api/v1/auth/sign-up:
 *   post:
 *     summary: Sign up new user
 *     tags: [Auth]
 *     description: Sign up new user
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
 *               password:
 *                 type: string
 *               mobileNumber:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *           required:
 *              - name
 *              - email
 *              - password
 *              - mobileNumber
 *     responses:
 *       200:
 *         description: User sign up successfully
 *       400:
 *         description: Invalid request body
 *       409:
 *         description: email must be unique
 */


/**
 * @swagger
 * /api/v1/auth/sign-in:
 *   post:
 *     summary: Sign in user
 *     tags: [Auth]
 *     description: Sign in user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           required:
 *              - email
 *              - password
 *     responses:
 *       200:
 *         description: User login successfully
 *       401:
 *         description: Unauthorized - Invalid credentials
 *       400:
 *         description: Invalid request body
 */