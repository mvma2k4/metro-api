import * as Joi from 'joi';
import Validation from '../validation';
import { IServiceInfoModel } from './model';

/**
 * @export
 * @class ServiceInfoValidation
 * @extends Validation
 */
class ServiceInfoValidation extends Validation {

    /**
     * Creates an instance of ServiceInfoValidation.
     * @memberof ServiceInfoValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IServiceInfoModel} params
     * @returns {Joi.ValidationResult<IServiceInfoModel >}
     * @memberof ServiceInfoValidation
     */
    createServiceInfo(
        params: IServiceInfoModel
    ): Joi.ValidationResult < IServiceInfoModel > {
        const schema: Joi.Schema = Joi.object().keys({
            description: Joi.string().required(),
            provider_uuid: Joi.string().required(),
            provider_name: Joi.string().required(),
            service_type_uuid: Joi.string().required(),
            base_price: Joi.number().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ServiceInfoValidation
     */
    getServiceInfo(
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
     * @memberof ServiceInfoValidation
     */
    removeServiceInfo(
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

export default new ServiceInfoValidation();
