import express from "express";
import { engine } from 'express-handlebars';
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const students = [
    {
        id: 1,
        name: 'Ahmad',
        city: 'Shibeen'
    },
    {
        id: 2,
        name: 'Rawan',
        city: 'Alex'
    },
    {
        id: 3,
        name: 'yasser',
        city: 'cairo'
    },
]
app.get("/students", (req, res) => {
    res.render('students',{layout: false , students})


})
app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = students.find((item) => {
        return item.id == id;
    });

    res.render("student", { layout: false , student:student})
});

app.listen(5000);