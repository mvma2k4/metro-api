import * as Joi from 'joi';
import Validation from '../validation';
import { IFeesInfoFieldModel } from './model';

/**
 * @export
 * @class FeesInfoFieldValidation
 * @extends Validation
 */
class FeesInfoFieldValidation extends Validation {

    /**
     * Creates an instance of FeesInfoFieldValidation.
     * @memberof FeesInfoFieldValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IFeesInfoFieldModel} params
     * @returns {Joi.ValidationResult<IFeesInfoFieldModel >}
     * @memberof FeesInfoFieldValidation
     */
    createFeesInfoField(
        params: IFeesInfoFieldModel
    ): Joi.ValidationResult < IFeesInfoFieldModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            percentage: Joi.string().required(),
            service_client_fees_uuid: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof FeesInfoFieldValidation
     */
    getFeesInfoField(
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
     * @memberof FeesInfoFieldValidation
     */
    removeFeesInfoField(
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

export default new FeesInfoFieldValidation();
