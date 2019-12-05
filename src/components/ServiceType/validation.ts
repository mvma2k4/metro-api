import * as Joi from 'joi';
import Validation from '../validation';
import { IServiceTypeModel } from './model';

/**
 * @export
 * @class ServiceTypeValidation
 * @extends Validation
 */
class ServiceTypeValidation extends Validation {

    /**
     * Creates an instance of ServiceTypeValidation.
     * @memberof ServiceTypeValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IServiceTypeModel} params
     * @returns {Joi.ValidationResult<IServiceTypeModel >}
     * @memberof ServiceTypeValidation
     */
    createServiceType(
        params: IServiceTypeModel
    ): Joi.ValidationResult < IServiceTypeModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ServiceTypeValidation
     */
    getServiceType(
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
     * @memberof ServiceTypeValidation
     */
    removeServiceType(
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

export default new ServiceTypeValidation();
