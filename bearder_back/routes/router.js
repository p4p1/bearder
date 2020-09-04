const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = require("../lib/db.js");
const middleware = require("../middleware/middleware.js");

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '/.env') })

const SECRETKEY = process.env.SECRETKEY; // md5 hash of Leo Smith

router.post("/login", (req, res, next) => {
  // query to get username
  db.query(
    `SELECT * FROM users WHERE username = ${db.escape(req.body.username)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: "Username or password is incorrect!"
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          // error from bcrypt
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: "Username or password is incorrect!"
            });
          }
          // Correct password
          if (bResult) {
            const token = jwt.sign(
              {
                username: result[0].username,
              },
              SECRETKEY,
              {
                expiresIn: "7d"
              }
            );
            return res.status(200).send({
              msg: "Logged in!",
              token
            });
          }
          // no result so incorrect password
          return res.status(401).send({
            msg: "Username or password is incorrect!"
          });
        }
      );
    }
  );
});

router.post("/register", middleware.validateRegister, (req, res, next) => {
  // query to see if use exists
  db.query(
    `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
      req.body.username
    )});`,
    (err, result) => {
      // result.length should be null if there is no username match
      if (result.length) {
        return res.status(409).send({
          msg: "This username is already in use!"
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            // bcrypt didnt hash the password
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO users(username, password) values(${db.escape(
                req.body.username
              )}, ${db.escape(hash)})`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: "Registered!"
                });
              }
            );
          }
        });
      }
    }
  );
});


module.exports = router;
