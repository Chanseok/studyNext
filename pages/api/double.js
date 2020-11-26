export default (req, res) => {
    const value = parseFloat(req.query.value);

    res.statusCode = 200;
    res.json({value: value * 2});
}