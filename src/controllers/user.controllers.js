const User = require('../models/user.model.js');
const nodemailer = require('nodemailer');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting list of users."
        });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

		//Create Nodemailer Transport
		var transporter = nodemailer.createTransport({
	 host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "rohan.stutalk@gmail.com",
      clientId:"292427988066-5i31u24ei0e4ep9la470otrsd3alq2bu.apps.googleusercontent.com",
      clientSecret: "S3J4qYel2Bm8NzJAarbK0i3g",
      refreshToken: "1//04pXBOaJb6_OwCgYIARAAGAQSNwF-L9IrCKdZ8_X1wcXnTNKUWvw-V2x8hCn0nh2AIUiEDXO7VqypOr2EmTmdV8xzDLOyLjqT8hE",
      accessToken:"ya29.a0AfH6SMD4-DRRD_Hkh13u_m7Xp-iWKjhHc8Qebd0L96Kq3Z6EtWU2EBOs5ElIkZAgMvoakrcei5l_CoJ3JW5PscELL57EfmdccgOonqS1WVFkCJNO8R_bPiKTK6pZXu6_wmsjQsDXh6K7rF8yV-CzTIQHdGJsZnWS9JQ"
    }
});

//HTML Template 
const out = require('./MailTemplate.js');

//FirstHalf of the Template

var temp1 = out.template

//SecondHalf of the Template

var temp2 = `<div><ul>
                  <li>First Name: ${req.body.fname}</li>
                  <li>Last Name: ${req.body.lname}</li>
                  <li>Email ID: ${req.body.email}</li>
                  <li>Phone Number: ${req.body.phone}</li>
                  <li>Name of Institute: ${req.body.college}</li>
                  </ul></div>
                <div>&nbsp;</div>
              </div> 
              </div>
              <br>
              
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>&nbsp;</div>
        
    </body>
</html>` 

var output= temp1+temp2;

var mailOptions = {
	from: 'Rohan Christopher <rohan.stutalk@gmail.com>',
	to: `${req.body.email}`,
	subject:'Test NodeMailer',
	html:`${output}`
};

    // Create a new User
    const user = new User({
        fname: req.body.fname, 
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
				college: req.body.college
    });

    // Save user in the database
    user.save()
    .then(data => {
        res.sendFile(__dirname + "/success.html");
				transporter.sendMail(mailOptions)
    }).catch(err => {
        res.sendFile(__dirname + "/error.html");
    });
};

// Find a single User with a id
exports.findOne = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error getting user with id " + req.params.id
        });
    });
};

// Update a User identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        email: req.body.last_name,
        phone: req.body.last_name
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.id
        });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });
};




