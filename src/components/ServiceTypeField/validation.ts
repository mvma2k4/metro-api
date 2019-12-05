import * as Joi from 'joi';
import Validation from '../validation';
import { IServiceTypeFieldModel } from './model';

/**
 * @export
 * @class ServiceTypeFieldValidation
 * @extends Validation
 */
class ServiceTypeFieldValidation extends Validation {

    /**
     * Creates an instance of ServiceTypeFieldValidation.
     * @memberof ServiceTypeFieldValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IServiceTypeFieldModel} params
     * @returns {Joi.ValidationResult<IServiceTypeFieldModel >}
     * @memberof ServiceTypeFieldValidation
     */
    createServiceTypeField(
        params: IServiceTypeFieldModel
    ): Joi.ValidationResult < IServiceTypeFieldModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            label: Joi.string().required(),
            data_type: Joi.string().required(),
            service_type_uuid: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ServiceTypeFieldValidation
     */
    getServiceTypeField(
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
     * @memberof ServiceTypeFieldValidation
     */
    removeServiceTypeField(
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

export default new ServiceTypeFieldValidation();
