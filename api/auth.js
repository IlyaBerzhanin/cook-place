const { Op } = require('sequelize')
const SYNC_MODELS = require('../modules/setup-db').syncModels

async function login(req, res) {
  const USER = await SYNC_MODELS.user.findOne({
    where: {
      name: {
        [Op.eq]: req.name,
      },
      password: {
        [Op.eq]: req.password,
      },
    },
  })

  if (USER) {
    return {
      id: USER.id,
      name: USER.name,
      email: USER.email,
      password: USER.password,
    }
  } else {
    return false
  }
}

async function logout(req, res) {
  await require('axios').get(`https://reqres.in/api/users?page=1`)
  console.log('this is logout')
}

async function user(req, res) {
  const USER = await SYNC_MODELS.user.findOne({
    where: {
      email: {
        [Op.eq]: req.email,
      },
    },
  })
  return USER
}

async function register(req, res) {
  let user = await SYNC_MODELS.user.findOne({
    where: {
      email: {
        [Op.eq]: req.email,
      },
    },
  })

  if (user) return false
  else {
    user = await SYNC_MODELS.user.create({
      name: req.name,
      email: req.email,
      password: req.password,
    })

    return true
  }
}

export { login, logout, user, register }
