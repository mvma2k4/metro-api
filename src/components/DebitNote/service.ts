import * as Joi from 'joi';
import { DebitNoteModel, IDebitNoteModel } from './model';
import DebitNoteValidation from './validation';
import { IDebitNoteService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IDebitNoteModelService}
 */
const DebitNoteService: IDebitNoteService = {
    /**
     * @returns {Promise < IDebitNoteModel[] >}
     * @memberof DebitNoteService
     */
    async findAll(): Promise < IDebitNoteModel[] > {
        try {
            return await DebitNoteModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IDebitNoteModel >}
     * @memberof DebitNoteService
     */
    async findOne(id: string): Promise < IDebitNoteModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DebitNoteValidation.getDebitNote({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await DebitNoteModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IDebitNoteModel} body
     * @returns {Promise < IDebitNoteModel >}
     * @memberof DebitNoteService
     */
    async updateOne(id: string, body: IDebitNoteModel): Promise < IDebitNoteModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DebitNoteValidation.getDebitNote({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await DebitNoteModel.update(
                { fullname: body.name },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedDebitNote] ]) => {
                return updatedDebitNote
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IDebitNoteModel} DebitNote
     * @returns {Promise < IDebitNoteModel >}
     * @memberof DebitNoteService
     */
    async insert(body: IDebitNoteModel): Promise < IDebitNoteModel > {
        try {
            const validate: Joi.ValidationResult < IDebitNoteModel > = DebitNoteValidation.createDebitNote(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const DebitNote: IDebitNoteModel = await DebitNoteModel.create(body);

            return DebitNote;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IDebitNoteModel >}
     * @memberof DebitNoteService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DebitNoteValidation.removeDebitNote({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const DebitNote = await DebitNoteModel.findByPk(id).then((DebitNoteFound)=>{
               return DebitNoteFound.destroy();
            });
            return DebitNote;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default DebitNoteService;
