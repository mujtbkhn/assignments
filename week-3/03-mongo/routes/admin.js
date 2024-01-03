const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({ message: "Admin created successfully" })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    try {
        const newCourse = await Course.create({
            courseId: req.body.courseId,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink
        })

        res.status(201).json({
            message: 'Course created successfully',
            course: newCourse
        });

    } catch (error) {

        res.status(500).json({ message: "Internal Server Error", error })
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course
        .find()
        .then(course => {
            res.json({ course })
        })

});

module.exports = router;