
const connection = require('./database/connection');

module.exports = {
    async insert(req, res) {
        const { title, description, value } = request.body;
        const { id } = await connection('incidents').insert({
            title,
            description,
            value
        })
        const ong_id = req.headers.authorization;
        return res.json({ id });
    },
    async index(req, res) {
        const ongs = await connection('incidents').select('*');
        return res.json(ongs);
    }
}