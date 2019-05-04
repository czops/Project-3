// create db for panels

module.exports = function (sequelize, DataTypes) {
    const Panel = sequelize.define("Panel", {
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        shopOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        panelSizeX: {
            type: DataTypes.INTEGER
        },
        panelSizeY: {
            type: DataTypes.INTEGER
        },
        process1M1: {
            type: DataTypes.FLOAT
        },
        process1M2: {
            type: DataTypes.FLOAT
        },
        process2M1: {
            type: DataTypes.FLOAT
        },
        process2M2: {
            type: DataTypes.FLOAT
        },
        puckNumber: {
            type: DataTypes.INTEGER
        },
        panelNumberX: {
            type: DataTypes.INTEGER
        },
        panelNumberY: {
            type: DataTypes.INTEGER
        }
    })

    // One to many association of panels if we stretch

    Panel.associate = () => {
        Panel.hasMany(models.panelModel, {
            onDelete: "cascade"
        });

        Panel.hasMany(models.shopOrder, {
            onDelete: "cascade"
        })
    }

    return Panel;
}