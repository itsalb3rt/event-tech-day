import Sequelize from 'sequelize'
import sequelize from './connection'

const speakersModel = sequelize.define('speakers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    github_account: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default speakersModel;