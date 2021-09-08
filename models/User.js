module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
      'User',
      {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // token: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        // },
      },
      {
        // Other model options go here
      }
    )

    return User
}