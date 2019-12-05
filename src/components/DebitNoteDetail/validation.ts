import * as Joi from 'joi';
import Validation from '../validation';
import { IDebitNoteDetailModel } from './model';

/**
 * @export
 * @class DebitNoteDetailValidation
 * @extends Validation
 */
class DebitNoteDetailValidation extends Validation {

    /**
     * Creates an instance of DebitNoteDetailValidation.
     * @memberof DebitNoteDetailValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IDebitNoteDetailModel} params
     * @returns {Joi.ValidationResult<IDebitNoteDetailModel >}
     * @memberof DebitNoteDetailValidation
     */
    createDebitNoteDetail(
        params: IDebitNoteDetailModel
    ): Joi.ValidationResult < IDebitNoteDetailModel > {
        const schema: Joi.Schema = Joi.object().keys({
            code:Joi.string().required(),
            current_date: Joi.string().required(),
            expiration_date: Joi.string().required(),
            clientName:Joi.string().required(),
            providerName:Joi.string().required(),
            counter_uuid:Joi.string().required(),
            counterName:Joi.string().required(),
            passenger:Joi.string().required(),
            voucher:Joi.string().required(),
            service:Joi.string().required(),
            concept: Joi.string().required(),
            client_uuid: Joi.string().required(),
            provider_uuid: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof DebitNoteDetailValidation
     */
    getDebitNoteDetail(
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
     * @memberof DebitNoteDetailValidation
     */
    removeDebitNoteDetail(
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

export default new DebitNoteDetailValidation();
