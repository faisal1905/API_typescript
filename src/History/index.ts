import * as express from "express";
import * as History from "./History";

let router = express.Router();

/** 
 * @swagger
 * 
 * definitions:
 *  History:
 *      type: object
 *      required:
 *          - id
 *          - id_user
 *          - date
 *      properties:
 *          id: 
 *              example: 0
 *              type: integer
 *          id_user: 
 *              example: 1
 *              type: integer
 *          date: 
 *              example: 29 januari 2020
 *              type: date            
*/

/**
 * @swagger
 * /History:
 *      post:
 *          tags:
 *              - History
 *          summary: activity
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: body
 *                in: body
 *                description: Insert a new profile
 *                required: true
 *                type: string
 *                schema:
 *                  $ref: '#/definitions/Registration'
 *          responses:
 *             200:
 *                  description: Succesful
 *             400: 
 *                  description: Invalid
 */
router.route('').get(History.getHistory);

export = router;