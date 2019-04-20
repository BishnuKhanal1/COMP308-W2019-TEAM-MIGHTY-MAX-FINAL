let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let surveyModel = require('../models/survey');
let surveyAnswersModel = require('../models/surveyAnswers');

module.exports.displaySurveyAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Successfully Displayed Add Page'});
}

module.exports.processSurveyAddPage = (req, res, next) => {

    let newSurvey = surveyModel({
        "title":req.body.title,
        "typeOfSurvey":req.body.type,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
        "question4": req.body.question4,
        "question5": req.body.question5,
        "question6": req.body.question6
    });

    surveyModel.create(newSurvey, (err, surveyModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Added New Survey'});
        }
    });
}

module.exports.displaySurveys = (req, res, next) =>{
    surveyModel.find((err, surveys) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Surveys loaded and displayed successfully', surveys: surveys /*user: req.user */});
        }
    });
}

module.exports.displaySurveyPage = (req, res, next) => {
    let id = req.params.id;

    surveyModel.findById(id, (err, surveyObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Survey loaded and displayed successfully', survey: surveyObject});
        }
    });
}

module.exports.processSurveyPage = (req, res, next) => {

    let collectAnswersFromSurveyPage = surveyAnswersModel({
            "answer1": req.body.answer1,
            "answer2": req.body.answer2,
            "answer3": req.body.answer3,
            "answer4": req.body.answer4,
            "answer5": req.body.answer5,
            "answer6": req.body.answer6
    });

    surveyAnswersModel.create(collectAnswersFromSurveyPage, (err, answer) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Survey answers collected successfully'});
        }
    });

    // surveyModel.update({_id: id}, updatedCountForSurvey, (err) => {
    //     if(err) {
    //         console.log(err);
    //         res.end(err);
    //     }
    //     else {
    //         surveyModel.
    //         res.json({success: true, msg: 'Successfully Edited Contact', survey: updatedCountForSurvey});
    //     }
    // });
}

/* module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contactModel.findById(id, (err, contactObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Contact to Edit', contact: contactObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contactModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    });

    contactModel.update({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Edited Contact', contact: updatedContact});
        }
    })
} 

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully Deleted Contact'});
        }
    });
} */
