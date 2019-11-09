import Sequelize from 'sequelize'

const sequelize = new Sequelize('event_tech_day', 'root', '', {
    dialect: 'mariadb'
})

export default sequelize;