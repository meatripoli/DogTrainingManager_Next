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
        }).then((queryResp) => {
            res.status(200);
            res.json(queryResp);
        }).catch((error) => {
            console.log(error)
            res.status(500);
            res.json({error:error, stackError:error.stack});
        });   
    })
    server.get('/api/form',(req,res)=>{
        db.trainingForm
        .findAll({where:{
            status: 'inactive'
        }}).then((queryResp) => {
            res.status(200);
            res.json(queryResp);
        }).catch((error) => {
            console.log(error)
            res.status(500);
            res.json({error:error, stackError:error.stack});
        });
    });
    server.get('/api/dogs',(req,res)=>{
        db.trainingForm
        .findAll({where:{
            status: 'active'
        }}).then((queryResp) => {
            res.status(200);
            res.json(queryResp);
        }).catch((error) => {
            console.log(error)
            res.status(500);
            res.json({error:error, stackError:error.stack});
        });
    });
    ///this route needs to change and come from the /dogs page
    server.put('/api/dogprofile/:name',(req,res)=>{
        console.log('server side put',req.params.name)
        console.log('server side put',req.body)
        db.trainingForm
        .update({
            heel: req.body.heel,
            program: req.body.program,
            dateofIntake: req.body.dateofIntake
        }, 
        {
            where: {
                id: req.body.id
            }   
        }).then((queryResp) => {
            res.status(200);
            res.json(queryResp);
        }).catch((error) => {
            console.log(error)
            res.status(500);
            res.json({error:error, stackError:error.stack});
        });
    });

    server.post('/api/dogprofile/:name',(req,res)=>{
        console.log('server side post',req.params.name)
        console.log('server side post',req.body)
        db.dogStatus.create({
            dogID:req.body.dogID,
            peed:req.body.peed, 
            pooped:req.body.pooped,
            pottyNotes:req.body.pottyNotes,
            ate:req.body.ate, 
            feedingNotes:req.body.feedingNotes,
            sit:req.body.sit,
            sitDuration:req.body.sitDuration, 
            sitDistance:req.body.sitDistance,
            sitNotes:req.body.sitNotes,
            down:req.body.down, 
            downDuration:req.body.downDuration,
            downDistance:req.body.downDistance,
            downNotes:req.body.downNotes, 
            place:req.body.place, 
            placeDuration:req.body.placeDuration,
            placeDistance:req.body.placeDistance,
            placeNotes:req.body.placeNotes, 
            heel:req.body.heel,
            heelDuration:req.body.heelDuration,
            heelDistance:req.body.heelDistance, 
            heelNotes:req.body.heelNotes,
            recall:req.body.recall,
            recallDuration:req.body.recallDuration, 
            recallDistance:req.body.recallDistance,
            recallNotes:req.body.recallNotes,
            letsGo:req.body.letsGo, 
            letsGoDuration:req.body.letsGoDuration,
            letsGoDistance:req.body.letsGoDistance,
            letsGoNotes:req.body.letsGoNotes, 
            doorManners:req.body.doorManners,
            doorMannersDuration:req.body.doorMannersDuration,
            doorMannersDistance:req.body.doorMannersDistance, 
            doorMannersNotes:req.body.doorMannersNotes,
            outing:req.body.outing,
            outingNotes:req.body.outingNotes, 
        }).then((queryResp) => {
            res.status(200);
            res.json(queryResp);
        }).catch((error) => {
            console.log(error)
            res.status(500);
            res.json({error:error, stackError:error.stack});
        });
    });
};