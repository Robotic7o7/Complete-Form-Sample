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
var output = `<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Confirmation Mail</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
            <center class="m_-8901952281184217417wrapper">
                    <div>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="m_-8901952281184217417wrapper" bgcolor="#f5f5f5">
                        <tbody><tr>
                          <td valign="top" bgcolor="#f5f5f5" width="100%">
                            <table width="100%" role="content-container" align="center" cellpadding="0" cellspacing="0" border="0">
                              <tbody><tr>
                                <td width="100%">
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tbody><tr>
                                      <td>
                                        
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px" align="center">
                                          <tbody><tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px;color:#000000;text-align:left" bgcolor="#ffffff" width="100%" align="left">
                                              
                                                <table class="m_-8901952281184217417preheader" role="module" border="0" cellpadding="0" cellspacing="0" width="100%" style="display:none!important;opacity:0;color:transparent;height:0;width:0">
                                         <tbody><tr>
                                            <td role="module-content">
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                
                            <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                    <tbody><tr>
                      <td style="padding:0px 0px 20px 0px" role="module-content" bgcolor="#F5F5F5">
                      </td>
                    </tr>
                  </tbody></table>
                  <table class="m_-8901952281184217417wrapper" role="module" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                        <tbody><tr>
                          <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px" valign="top" align="center">
                            <img class="m_-8901952281184217417max-width CToWUd a6T" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px;max-width:100%!important;width:100%;height:auto!important" src="https://lh3.googleusercontent.com/KAj2033_4fi0SHx9UP7gJPgOtZZPCBKv78_We-BqVOZXiTiEPcbssOQ3Ym5TkJtn2PJ1tok81G90Z5H4vroTYr9lT7JOD9ckfykJwkcDCuc_hSC0JPkXp37-13cw7Avh8HOzX7tqAQ=w2400" alt="Registration Successful" width="600" tabindex="0">
                          </td>
                        </tr>
                      </tbody></table>
                  <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                        <tbody><tr>
                          <td style="padding:18px 18px 18px 18px;line-height:22px;text-align:inherit;background-color:#b0cae9" height="100%" valign="top" bgcolor="#ffffff">
                

                  <table class="m_-8901952281184217417wrapper" role="module" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                        <tbody><tr>
                          <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px" valign="top" align="center">
                            <img class="m_-8901952281184217417max-width CToWUd a6T" border="0" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px;max-width:100%!important;width:100%;height:auto!important" src="https://lh3.googleusercontent.com/fzBiczsR7krJuMoKftaK-5-3g9csn7AYxBwida3zv_Ia9MgQHB2GdRNU_k6tOzw-ZVsdWEeZo6BUb-30fAUxuLQbpQagVveFwHtlcDiSOdc0HTErik3BrPtl-X7lq_u9daOMRsfbtA=w2400" alt="Registration Successful" width="600" tabindex="0">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                
                  <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                    <tbody><tr>
                      <td style="padding:18px 18px 18px 18px;line-height:22px;text-align:inherit;background-color:#ffffff" height="100%" valign="top" bgcolor="#ffffff">
                          
              
              
              <div>
              <div dir="ltr">
              <div><p align="center"><strong><em>"The capacity to learn is a gift; The ability to learn is a skill; The willingness to learn is a choice."</em></strong></p></div>
              <div><p align="center">We have received your application for an invite to the event <strong>Event Name</strong>. Your response has been recorded. Thank you for showing your interest.</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>This is the information that we got: </strong></div>
              <div><ul>
                  <li>First Name: ${req.body.fname}</li>
                  <li>Last Name: ${req.body.lname}</li>
                  <li>Email ID: ${req.body.email}</li>
                  <li>Phone Number: ${req.body.phone}</li>
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


var mailOptions = {
	from: 'Rohan Christopher <rohan.stutalk@gmail.com>',
	to: `${req.body.email}`,
	subject:'Registration Successful - Event Name',
	html:`${output}`
};

    // Create a new User
    const user = new User({
        fname: req.body.fname, 
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone
    });

    // Save user in the database
    user.save()
    .then(data => {
        res.sendFile(__dirname + "/success.html");
				transporter.sendMail(mailOptions);
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
        fname: req.body.fname, 
        lname: req.body.name,
        email: req.body.email,
        phone: req.body.phone
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