const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:%23Mujju11@mongoassignment.fc67lig.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
    },
    password: {
        type: String,
    },
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    purchasedCourse: [{
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },

    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId: {
        type: String,
        unique: true
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageLink: {
        type: String
    },
    published: {
        type: Boolean,
        default: false
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}