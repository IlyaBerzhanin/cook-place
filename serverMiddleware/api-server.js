// const { Sequelize, DataTypes } = require('sequelize')

export default async (req, res, next) => {
  let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '')
  url = url.split('/')
  const method = url.pop()
  const controller = url.slice(1).join('/')
  const api = require('../api/' + controller)
  const result = await api[method](req.params)
  res.end(JSON.stringify(result))
  // next() // ?????????????????
}

// async function setupDb() {
//   const sequelize = new Sequelize(
//     'postgres://postgres:03bohater!OK@localhost:5432/cook_place'
//   )
//   await sequelize.authenticate()
//   console.log('Connection has been established successfully.')
//   console.log('auth finished')

//   const User = sequelize.define(
//     'User',
//     {
//       // Model attributes are defined here
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         // allowNull defaults to true
//       },
//     },
//     {
//       // Other model options go here
//     }
//   )

//   await User.sync()
//   // const jane = await User.create({ firstName: 'JAck', lastName: 'Snow' })
//   // console.log("Jane's auto-generated ID:", jane.id)
//   const users = await User.findAll()
//   console.log('All users:', JSON.stringify(users, null, 2))
// }

// setupDb()
