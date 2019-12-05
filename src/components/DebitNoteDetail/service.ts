import * as Joi from 'joi';
import { DebitNoteDetailModel, IDebitNoteDetailModel } from './model';
import DebitNoteDetailValidation from './validation';
import { IDebitNoteDetailService } from './interface';
import { where } from 'sequelize/types';
//import { Types } from 'mongoose';

/**
 * @export
 * @implements {IDebitNoteDetailModelService}
 */
const DebitNoteDetailService: IDebitNoteDetailService = {
    /**
     * @returns {Promise < IDebitNoteDetailModel[] >}
     * @memberof DebitNoteDetailService
     */
    async findAll(): Promise < IDebitNoteDetailModel[] > {
        try {
            return await DebitNoteDetailModel.findAll();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IDebitNoteDetailModel >}
     * @memberof DebitNoteDetailService
     */
    async findOne(id: string): Promise < IDebitNoteDetailModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DebitNoteDetailValidation.getDebitNoteDetail({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await DebitNoteDetailModel.findByPk(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id 
     * @param {IDebitNoteDetailModel} body
     * @returns {Promise < IDebitNoteDetailModel >}
     * @memberof DebitNoteDetailService
     */
    async updateOne(id: string, body: IDebitNoteDetailModel): Promise < IDebitNoteDetailModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DebitNoteDetailValidation.getDebitNoteDetail({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await DebitNoteDetailModel.update(
                { unit_price: body.unit_price,
                  count: body.count,
                  total: body.total },
                { returning: true, where: { uuid: id} }
            )
            .then(([ rowsUpdate, [updatedDebitNoteDetail] ]) => {
                return updatedDebitNoteDetail
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IDebitNoteDetailModel} DebitNoteDetail
     * @returns {Promise < IDebitNoteDetailModel >}
     * @memberof DebitNoteDetailService
     */
    async insert(body: IDebitNoteDetailModel): Promise < IDebitNoteDetailModel > {
        try {
            const validate: Joi.ValidationResult < IDebitNoteDetailModel > = DebitNoteDetailValidation.createDebitNoteDetail(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const DebitNoteDetail: IDebitNoteDetailModel = await DebitNoteDetailModel.create(body);

            return DebitNoteDetail;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns  {Promise < IDebitNoteDetailModel >}
     * @memberof DebitNoteDetailService
     */
    async remove(id: string) {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DebitNoteDetailValidation.removeDebitNoteDetail({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }


            const DebitNoteDetail = await DebitNoteDetailModel.findByPk(id).then((DebitNoteDetailFound)=>{
               return DebitNoteDetailFound.destroy();
            });
            return DebitNoteDetail;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default DebitNoteDetailService;
