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
        }
    });

    Model.associate =()=>{
        Model.belongsTo(models.trainingform, {
            foreignKey: {
            allowNull: true
            }
        });
        models.trainingform.hasOne(models.dogstatus, {
            foreignKey: {
                allowNull: true
            }
        });
    }
    return Model;
}