import Sequelize from 'sequelize'
import sequelize from './connection'

const talksModel = sequelize.define('talks',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tags: {
        type: Sequelize.STRING
    },
    speakerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

export default talksModel;