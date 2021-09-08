const { Sequelize, DataTypes } = require('sequelize')
const syncModels = {}

export default function () {
  this.nuxt.hook('listen', (server, port) => {
    setupDb()
  })
}

async function setupDb() {
  const sequelize = new Sequelize(
    'postgres://postgres:03bohater!OK@localhost:5432/cook_place'
  )
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
  console.log('auth finished')
  const User = require('../models/User')(sequelize, DataTypes)
  await User.sync({ force: true })
  syncModels.user = User
  // const jane = await User.create({ firstName: 'JAck', lastName: 'Snow' })
  // console.log("Jane's auto-generated ID:", jane.id)
  //    const users = await sync.findAll()
  //   console.log('All users:', JSON.stringify(users, null, 2))
  console.log(
    '===================================================================---+++',
    sequelize.models
  )
}

module.exports.syncModels = syncModels