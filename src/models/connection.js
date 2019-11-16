import Sequelize from 'sequelize'

let host = process.env.HOST || 'localhost';
let user = process.env.USERNAME || 'root';
let password = process.env.PASSWORD || ''

console.log("========================");
console.log(host, user, password);

const sequelize = new Sequelize('event_tech_day', 
user, password, {
    host: host,
    dialect: 'mariadb'
})

export default sequelize;