// GET Homepage

const index = (req, res) => {
    res.render('index', {title: "Travlt Getaways"});
};

module.exports = {
    index
}