var User = require('./models/users');

module.exports = function (app) {



    app.get('/api/users', function (req, res) {

        User.find(function (err, contactlist) {
            if (err) {
                res.send(err);

            } else {
                res.json(contactlist)
            }

        })
    });
   


    // create todo and send back all todos after creation
    app.post('/api/users', function (req, res) {
        User.create({
            username: req.body.username,
            password: req.body.password
          
        }, function (err, contact) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(contact)
            }

        });
    })


  

    app.get('*', function (req, res) {
        res.sendfile('./public/login.html');
    });
};