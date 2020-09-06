const mongoose = require('mongoose');

const ApplicantSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:String,
		college:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Applicant', ApplicantSchema);