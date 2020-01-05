import * as Joi from 'joi';
import Validation from '../validation';
import { IServiceClientFeesModel } from './model';

/**
 * @export
 * @class ServiceClientFeesValidation
 * @extends Validation
 */
class ServiceClientFeesValidation extends Validation {

    /**
     * Creates an instance of ServiceClientFeesValidation.
     * @memberof ServiceClientFeesValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IServiceClientFeesModel} params
     * @returns {Joi.ValidationResult<IServiceClientFeesModel >}
     * @memberof ServiceClientFeesValidation
     */
    createServiceClientFees(
        params: IServiceClientFeesModel
    ): Joi.ValidationResult < IServiceClientFeesModel > {
        const schema: Joi.Schema = Joi.object().keys({
            description: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ServiceClientFeesValidation
     */
    getServiceClientFees(
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
     * @memberof ServiceClientFeesValidation
     */
    removeServiceClientFees(
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

export default new ServiceClientFeesValidation();
