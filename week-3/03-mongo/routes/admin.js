const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes 
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username
    const password = req.body.password
    await Admin.create({
        username,
        password
    })
    res.json({ message: "Admin created successfully" })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    try {
        const newCourse = await Course.create({
            title,
            description,
            price,
            imageLink
        })

        res.status(201).json({
            message: 'Course created successfully',
            courseId: newCourse._id
        });

    } catch (error) {

        res.status(500).json({ message: "Internal Server Error", error })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course
        .find({})


    res.json({ courses: response })


});

module.exports = router;