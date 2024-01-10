const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:%23Mujju11@mongoassignment.fc67lig.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password:  String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password:  String,
    purchasedCourse: [{
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
        },
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}