import * as Joi from 'joi';
import Validation from '../validation';
import { IDebitNoteModel } from './model';

/**
 * @export
 * @class DebitNoteValidation
 * @extends Validation
 */
class DebitNoteValidation extends Validation {

    /**
     * Creates an instance of DebitNoteValidation.
     * @memberof DebitNoteValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IDebitNoteModel} params
     * @returns {Joi.ValidationResult<IDebitNoteModel >}
     * @memberof DebitNoteValidation
     */
    createDebitNote(
        params: IDebitNoteModel
    ): Joi.ValidationResult < IDebitNoteModel > {
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
     * @memberof DebitNoteValidation
     */
    getDebitNote(
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
     * @memberof DebitNoteValidation
     */
    removeDebitNote(
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

export default new DebitNoteValidation();
