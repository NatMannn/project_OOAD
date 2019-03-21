const express = require("express");
const app = express();
const userRouter = express.Router();
const User = require("../models/user");

//-------------------------------Main------------------------------
userRouter.route('/main').get(function (req, res) {
  res.render('main');
});

//-------------------------------Login------------------------------
userRouter.route('/').get(function (req, res) {
  res.render('login',{err:false});
});

userRouter.route('/login').get(function (req, res) {
  res.render('login',{err:false});
});

userRouter.route("/login").post(function(req, res) {
  const username = req.body.nameUser;
  const password = req.body.namePassword;
  console.log(username)
  User.findOne({ idUser: username, password: password }, function(err, user) {
    if (err) {
      res.status(400).send("No have user");
    } else {
      if (user) {
        res.redirect('main');
        res.render("login",{err:false});
      } else {
        res.render("login",{err:true});
      }
    }
  });
});

//-------------------------------show user------------------------------
userRouter.route("/managerUsers").get(function(req, res) {
  User.find(function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.render("managerUsers", {users:users}); //render collection "users"
    }
  });
});

//-------------------------------add user------------------------------
userRouter.route("/create").get(function(req, res) {
  res.render("addUsers");
});
userRouter.route("/create").post(function(req, res) {
  const user = new User(req.body);
  console.log(user);
  user
    .save()
    .then(user => {
      res.redirect("managerUsers");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
//-------------------------------delete user------------------------------
userRouter.route("/delete/:id").get(function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function(err, coin) {
    if (err) res.json(err);
    else res.redirect("/reg/managerUsers");
  });
});
//-------------------------------update user------------------------------
userRouter.route("/edit/:id").get(function(req, res) {
  const id = req.params.id;
  User.findById(id, function(err, user) {
    res.render("editUsers", { user: user });
  });
});
userRouter.route("/edit/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user) return next(new Error("Could not load Document"));
    else {
      // do your updates here
      user.idUser = req.body.idUser;
      user.firstname = req.body.firstname; // รับค่าจากหน้า ฟอร์ม
      user.lastname = req.body.lastname;
      user.selectType = req.body.selectType;

      user
        .save()
        .then(user => {
          res.redirect("/reg/managerUsers");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
module.exports = userRouter;
