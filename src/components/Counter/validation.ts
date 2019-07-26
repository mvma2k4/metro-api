import * as Joi from 'joi';
import Validation from '../validation';
import { ICounterModel } from './model';

/**
 * @export
 * @class CounterValidation
 * @extends Validation
 */
class CounterValidation extends Validation {

    /**
     * Creates an instance of CounterValidation.
     * @memberof CounterValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICounterModel} params
     * @returns {Joi.ValidationResult<ICounterModel >}
     * @memberof CounterValidation
     */
    createCounter(
        params: ICounterModel
    ): Joi.ValidationResult < ICounterModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            address: Joi.string().required(),
            phone: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CounterValidation
     */
    getCounter(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.string().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CounterValidation
     */
    removeCounter(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.string().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new CounterValidation();
