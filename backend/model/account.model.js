module.exports.connect = (params, callback) => {
    sequelize = new Sequelize(params.dbname,
                              params.username,
                              params.password,
                              params.params);
    User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING,
        email: Sequelize.STRING
    });
}