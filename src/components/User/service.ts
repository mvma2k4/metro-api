import * as Joi from 'joi';
import { UserModel, IUserModel } from './model';
import UserValidation from './validation';
import { IUserService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < IUserModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < IUserModel[] > {
        try {
            return await UserModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < IUserModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = UserValidation.getUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await UserModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IUserModel} body
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async updateOne(id: string, body: IUserModel): Promise < IUserModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = UserValidation.getUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await UserModel.update(
                { fullname: body.fullname },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedUser] ]) => {
                return updatedUser
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IUserModel} user
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async insert(body: IUserModel): Promise < IUserModel > {
        try {
            const validate: Joi.ValidationResult < IUserModel > = UserValidation.createUser(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: IUserModel = await UserModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {void}
     * @memberof UserService
     */
    async remove(id: string) : Promise<any>{
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = UserValidation.removeUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            return UserModel.destroy({
                where: { uuid: id }
            }).then( deletedUser => {
                console.log(`Deleted: ${deletedUser}`);
                return deletedUser;
            });
            // UserModel.findByPk(id).then(userFound =>{
            //    return userFound.destroy();
            // });
            // return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default UserService;
