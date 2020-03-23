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
        }
    });
    return Model;
}