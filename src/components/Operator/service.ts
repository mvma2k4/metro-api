import * as Joi from 'joi';
import { OperatorModel, IOperatorModel } from './model';
import OperatorValidation from './validation';
import { IOperatorService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IOperatorModelService}
 */
const OperatorService: IOperatorService = {
    /**
     * @returns {Promise < IOperatorModel[] >}
     * @memberof OperatorService
     */
    async findAll(): Promise < IOperatorModel[] > {
        try {
            return await OperatorModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IOperatorModel >}
     * @memberof OperatorService
     */
    async findOne(id: string): Promise < IOperatorModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = OperatorValidation.getOperator({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await OperatorModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IOperatorModel} body
     * @returns {Promise < IOperatorModel >}
     * @memberof OperatorService
     */
    async updateOne(id: string, body: IOperatorModel): Promise < IOperatorModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = OperatorValidation.getOperator({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await OperatorModel.update(
                { fullname: body.name },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedOperator] ]) => {
                return updatedOperator
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IOperatorModel} Operator
     * @returns {Promise < IOperatorModel >}
     * @memberof OperatorService
     */
    async insert(body: IOperatorModel): Promise < IOperatorModel > {
        try {
            const validate: Joi.ValidationResult < IOperatorModel > = OperatorValidation.createOperator(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Operator: IOperatorModel = await OperatorModel.create(body);

            return Operator;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IOperatorModel >}
     * @memberof OperatorService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = OperatorValidation.removeOperator({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const Operator = await OperatorModel.findByPk(id).then((OperatorFound)=>{
               return OperatorFound.destroy();
            });
            return Operator;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default OperatorService;
