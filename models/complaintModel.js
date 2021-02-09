const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const complaintSchema = new Schema({
    fName: { type: String},
    lName: { type: String},
    company: { type: String},
    email: { type: String},
    phoneNumber: { type: Number, index: true },
    message: { type: String},
  });

const ComplaintModel = mongoose.model('ComplaintModel', complaintSchema);

module.exports = ComplaintModel;