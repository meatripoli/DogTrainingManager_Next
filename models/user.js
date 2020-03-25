module.exports = (sequelize,DataTypes) => {
    const Model = sequelize.define('user', {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adminflag: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'n'
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
    return Model;
}