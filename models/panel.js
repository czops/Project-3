
module.exports = function (sequelize, DataTypes) {
    const Panel = sequelize.define("Panel", {
        shopOrder: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        modelNum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        panelSize: {
            type: DataTypes.STRING
        },
        process1M1: {
            type: DataTypes.FLOAT
        },
        process1M2: {
            type: DataTypes.FLOAT
        },
        Zone: {
            type: DataTypes.INTEGER
        },
        process1PuckNum: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        process2M1: {
            type: DataTypes.FLOAT
        },
        process2M2: {
            type: DataTypes.FLOAT
        },
        process2PuckNum: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        panelNumberX: {
            type: DataTypes.INTEGER
        },
        panelNumberY: {
            type: DataTypes.INTEGER
        }
    });

    return Panel;
};