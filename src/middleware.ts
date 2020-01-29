const jwt = require('express-jwt')

exports.authenticated = (req: any, res: any) => {
    const id = req.body.id
    jwt({secret: id})
}