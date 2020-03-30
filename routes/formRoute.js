const bodyParser = require('body-parser');
var db = require("../models");

module.exports = (handle,server) => {
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json());
    server.post('/form',(req,res)=>{
        //create new form entry in database
        db.trainingForm.create({
            dogName: req.body.dogName,
            dogAge: req.body.dogAge,
            dogBreed: req.body.dogBreed,
            dogGender: req.body.dogGender,
            dogAggressive: req.body.dogAggressive,
            humanAggressive: req.body.humanAggressive,
            fearful: req.body.fearful,
            leashPulling: req.body.leashPulling,
            doesntListenWhenCalled: req.body.doesntListenWhenCalled,
            toyAggression: req.body.toyAggression,
            foodAggression: req.body.foodAggression,
            separationAnxiety: req.body.separationAnxiety,
            barking: req.body.barking,
            listenSometimes: req.body.listenSometimes,
            counterSurfing: req.body.counterSurfing,
            lungingAtDogs: req.body.lungingAtDogs,
            lungingAtHumans: req.body.lungingAtHumans,
            jumping: req.body.jumping,
            improperHouseManners: req.body.improperHouseManners,
            additionalIssues: req.body.additionalIssues,
            commands: req.body.commands,
            foodName: req.body.foodName,
            foodAmount: req.body.foodAmount,
            foodTime: req.body.foodTime,
            toys: req.body.toys,
            allegires: req.body.allegires,
            medication: req.body.medication,
            medicationInfo: req.body.medicationInfo,
            medicalIssues: req.body.medicalIssues,
            dogFlu: req.body.dogFlu,
            fixed: req.body.fixed,
            ageFixed: req.body.ageFixed,
            dateofCycle: req.body.dateofCycle,
            vetName: req.body.vetName,
            vetPhone: req.body.vetPhone,
            heartwormFleaMedication: req.body.heartwormFleaMedication,
            nameAndDose: req.body.nameAndDose,
            extraNotes: req.body.extraNotes,
            referal: req.body.referal,
            ownerFirstName: req.body.ownerFirstName,
            ownerLastName: req.body.ownerLastName,
            ownerEmail: req.body.ownerEmail,
            ownerCellPhone: req.body.ownerCellPhone,
            ownerAddress: req.body.ownerAddress,
            ownerCity: req.body.ownerCity,
            ownerState: req.body.ownerState,
            ownerZip: req.body.ownerZip,
            emergencyContactFirstName: req.body.emergencyContactFirstName,
            emergencyContactLastName: req.body.emergencyContactLastName,
            emergencyContactCellPhone: req.body.emergencyContactCellPhone
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })    
    })
    server.get('/api/form',(req,res)=>{
        db.trainingForm
        .findAll().then((queryResp)=>{
            res.json(queryResp);
        });
    });
    server.get('/api/dogs',(req,res)=>{
        db.trainingForm
        .findAll({where:{
            status: 'active'
        }}).then((queryResp)=>{
            res.json(queryResp);
        });
    });
};