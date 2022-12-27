const express = require("express");

///------------>This step is important for using router
const router = express.Router();

//------------>This step is important for connecting to database
const database = require("nedb");
const studentDb = new database({ filename: "student.db", autoload: true });

//Get Api
//Get all students from database
//End point: /api/v1/students

router.get("/", async (req, res) => {
  try {
    studentDb.find({}).exec((err, studentData) => {
      if (err) {
        res.send("Error found data not edit" + err);
      } else {
        res.send(studentData);
      }
    });
    res.send("Hello World i am response from Student  server");
    console.log("Student data fetched successfully");
  } catch (err) {
    res.send("Error" + err);
  }
});

//Now we will create post api for inserting data into database
//End point: /api/v1/students

router.post("/", async (req, res) => {
  try {
    studentDb.insert(req.body, (err, addedDatabase) => {
      if (err) {
        res.send("Error found data not edit" + err);
      } else {
        res.send("Data added successfully");
      }
    });
    console.log("Student data inserted successfully");
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
