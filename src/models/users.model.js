import { DataTypes, Model } from "sequelize"
import { compare, hash } from "bcrypt";

export default (sequelize) => {

    class Users extends Model { }

    Users.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobileNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        profilePicture: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        tableName: "users",
    })

    Users.beforeCreate(async (user) => {
        user.password = await user.hasPassword(user.password)
    })

    // Hashing the password before create the user
    Users.prototype.hasPassword = async function (password) {
        const hashPassword = await hash(password, 10);
        return hashPassword;
    }

    return Users
}
