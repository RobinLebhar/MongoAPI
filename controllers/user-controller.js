module.exports = {
    getUsers (req,res) {
        res.send({result:'Des users'});
    },
    getUser (req,res) {
        const id = req.params.id;
        res.send({result:'Un user avec id :' + id});
    }
};