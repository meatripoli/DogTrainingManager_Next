module.exports = (sequelize,DataTypes) => {
    const Model= sequelize.define('dogstatus',{
        dogID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        peed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pooped: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pottyNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ate: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        } ,
        feedingNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sitDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        sitDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        sitNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        down: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        downDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        downDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        downNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        place: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        placeDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        placeDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        placeNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        heel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        heelDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        heelDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        heelNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        recall: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recallDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        recallDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        recallNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        letsGo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        letsGoDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        letsGoDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        letsGoNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        doorManners: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        doorMannersDuration: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        doorMannersDistance: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        doorMannersNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        outing: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        outingNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: { 
            type: DataTypes.DATE, 
            allowNull: false,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')            
        },
        updatedAt: { 
            type: DataTypes.DATE, 
            allowNull: false,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        }
    });
    return Model;
}