module.exports = (sequelize,DataTypes) => {
    const Model= sequelize.define('dogstatus',{
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'new'
        },
        checkInDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        goHomeDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        createdAt: { 
            type: DataTypes.DATE, 
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: { 
            type: DataTypes.DATE, 
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        }
    });

    // Model.associate =(models)=>{
    //     Model.belongsTo(models.trainingform, {
    //         foreignKey: {
    //         allowNull: true
    //         }
    //     });
    //     models.trainingform.hasOne(models.dogstatus, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // }
    return Model;
}