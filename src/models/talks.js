import Sequelize from 'sequelize'
import db from './connection'

const talksModel = db.define('talks',{
    name: {
        type: Sequelize.STRING
    },
    tags: {
        type: Sequelize.STRING
    },
    id_speaker: {
        type: Sequelize.INTEGER
    },
    time: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

export default talksModel;