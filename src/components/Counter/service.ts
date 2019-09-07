import * as Joi from 'joi';
import { CounterModel, ICounterModel } from './model';
import CounterValidation from './validation';
import { ICounterService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {ICounterModelService}
 */
const CounterService: ICounterService = {
    /**
     * @returns {Promise < ICounterModel[] >}
     * @memberof CounterService
     */
    async findAll(): Promise < ICounterModel[] > {
        try {
            return await CounterModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICounterModel >}
     * @memberof CounterService
     */
    async findOne(id: string): Promise < ICounterModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = CounterValidation.getCounter({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CounterModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {ICounterModel} body
     * @returns {Promise < ICounterModel >}
     * @memberof CounterService
     */
    async updateOne(id: string, body: ICounterModel): Promise < ICounterModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = CounterValidation.getCounter({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CounterModel.update(
                { name: body.name,
                  email: body.email,
                  client_uuid: body.client_uuid },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedCounter] ]) => {
                return updatedCounter
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICounterModel} Counter
     * @returns {Promise < ICounterModel >}
     * @memberof CounterService
     */
    async insert(body: ICounterModel): Promise < ICounterModel > {
        try {
            const validate: Joi.ValidationResult < ICounterModel > = CounterValidation.createCounter(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Counter: ICounterModel = await CounterModel.create(body);

            return Counter;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < ICounterModel >}
     * @memberof CounterService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = CounterValidation.removeCounter({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const Counter = await CounterModel.findByPk(id).then((CounterFound)=>{
               return CounterFound.destroy();
            });
            return Counter;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default CounterService;
