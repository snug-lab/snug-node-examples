module.exports = app => {

    let students = []

    app.route("/students")
    .get((req, res) => {
        res.status(200).json({
            students
        });
    })
    .post((req,res) => {
        const student = req.body.student

        students.push(student)
        res.status(201).json(student)
    })

};
