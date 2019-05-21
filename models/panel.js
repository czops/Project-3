
module.exports = function (sequelize, DataTypes) {
    const Panel = sequelize.define("Panel", {
        shopOrderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        modelNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        panelSize: {
            type: DataTypes.STRING
        },
        m1: {
            type: DataTypes.FLOAT
        },
        m2: {
            type: DataTypes.FLOAT
        },
        zone: {
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