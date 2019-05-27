import * as Joi from 'joi';
import { PermissionModel, IPermissionModel } from './model';
// import PermissionValidation from './validation';
import { IPermissionService } from './interface';
import { where } from 'sequelize/types';

/**
 * @export
 * @implements {IPermissionService}
 */
const PermissionService: IPermissionService = {
    /**
     * @returns {Promise < IPermissionModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < IPermissionModel[] > {
        try {
            return await PermissionModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IPermissionModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < IPermissionModel > {
        try {
            //// TODO: adding validations for Json schemmas
            // const validate: Joi.ValidationResult < {
            //     id: string
            // } > = UserValidation.getUser({
            //     id
            // });

            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }

            return await PermissionModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IPermissionModel} user
     * @returns {Promise < IPermissionModel >}
     * @memberof UserService
     */
    async insert(body: IPermissionModel): Promise < IPermissionModel > {
        try {
          //// TODO: adding validations for Json schemmas
            // const validate: Joi.ValidationResult < IPermissionModel > = UserValidation.createUser(body);

            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }

            const user: IPermissionModel = await PermissionModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {void}
     * @memberof UserService
     */
    async remove(id: string) {
        try {
          //// TODO: adding validations for Json schemmas
            // const validate: Joi.ValidationResult < {
            //     id: string
            // } > = UserValidation.removeUser({
            //     id
            // });

            // if (validate.error) {
            //     throw new Error(validate.error.message);
            // }

            await PermissionModel.findByPk(id).then((permissionFound)=>{
                permissionFound.destroy();
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default PermissionService;
