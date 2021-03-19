var mongoose = require("mongoose");
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    /* Admin | Default */
    role: String,
    email: String,
});
userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({
        username
    })

    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        } else {
            throw Error('Parola hatali')
        }
    } else {
        throw Error('Kullanıcı yok')

    }
}


userSchema.statics.register = async function (username, password) {
    const user = await this.findOne({
        username
    })
    if (!user) {
        const hashPass = await bcrypt.hash(password, 10)
        this.create({
            username: username,
            password: hashPass,
            role: 'Default'
        })
    } else {
        throw Error('Kullanıcı var')

    }
}

module.exports = mongoose.model("user", userSchema);