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
        }
    });
    return Model;
}