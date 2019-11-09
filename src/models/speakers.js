import Sequelize from 'sequelize'
import db from './connection'

const speakersModel = db.define('speakers', {
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
}, {
    timestamps: false,
})

export default speakersModel;