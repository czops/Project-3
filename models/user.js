
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            len: [5, 20]
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [5]
        }
    });

    return User;
};