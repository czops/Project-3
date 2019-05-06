module.exports = function (sequelize, DataTypes) {
    const Puck = sequelize.define("Puck", {
        puckNum: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        shopOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return Puck
}