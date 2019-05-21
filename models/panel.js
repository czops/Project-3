
module.exports = function (sequelize, DataTypes) {
    const Panel = sequelize.define("Panel", {
        shopOrderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 3,                  // only allow values >= 3
            }
        },
        modelNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 3,                  // only allow values >= 3
            }
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
        panelNumberX: {
            type: DataTypes.INTEGER
        },
        panelNumberY: {
            type: DataTypes.INTEGER
        }
    });

    return Panel;
};