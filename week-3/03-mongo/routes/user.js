const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({ message: "User created successfully" })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course
        .find()
        .then(course => {
            res.json({ course })
        })
});

router.get('/', (req, res) => {
    // Implement listing all courses logic
    User
        .find()
        .then(user => {
            res.json({ user })
        })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const username = req.headers.username;
        const password = req.headers.password;
        const courseId = req.params.courseId;

        // Find the user
        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(404).send("Authentication failed");
        }

        // Find the course
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        // Check if the course is already purchased
        if (user.purchasedCourse.includes(courseId)) {
            return res.status(404).json({ error: 'Course already purchased' });
        }

        // Add the courseId to the user's purchasedCourse array and save the user
        user.purchasedCourse.push(courseId);
        await user.save();

        res.json({ message: "Course purchased successfully" });
    } catch (error) {
        console.error('Error purchasing course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
    router.get('/purchasedCourses', userMiddleware, (req, res) => {
        // Implement fetching purchased courses logic
        Course
            .find(purchasedCourse)
            .then(
                res.json({
                    purchasedCourse
                })
            )
    });

    module.exports = router;