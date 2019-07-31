import * as Joi from 'joi';
import Validation from '../validation';
import { IOperatorModel } from './model';

/**
 * @export
 * @class OperatorValidation
 * @extends Validation
 */
class OperatorValidation extends Validation {

    /**
     * Creates an instance of OperatorValidation.
     * @memberof OperatorValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IOperatorModel} params
     * @returns {Joi.ValidationResult<IOperatorModel >}
     * @memberof OperatorValidation
     */
    createOperator(
        params: IOperatorModel
    ): Joi.ValidationResult < IOperatorModel > {
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
     * @memberof OperatorValidation
     */
    getOperator(
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
     * @memberof OperatorValidation
     */
    removeOperator(
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

export default new OperatorValidation();
