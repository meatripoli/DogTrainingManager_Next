module.exports = (sequelize,DataTypes) =>{
    return sequelize.define('trainingform',{
        dogName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dogAge: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dogBreed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dogGender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dogAggressive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        humanAggressive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        fearful: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        leashPulling: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        doesntListenWhenCalled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        toyAggression: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        foodAggression: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        separationAnxiety: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        barking: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        listenSometimes: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        counterSurfing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        lungingAtDogs: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        lungingAtHumans: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        jumping: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        improperHouseManners: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        additionalIssues: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commands: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        toys: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        allegires: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medicationInfo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medicalIssues: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dogFlu: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fixed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ageFixed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateofCycle: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        vetName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vetPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heartwormFleaMedication: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameAndDose: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extraNotes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        referal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerLastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerCellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerCity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerState: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerZip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergencyContactFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergencyContactLastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emergencyContactCellPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};