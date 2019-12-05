import { IDebitNoteDetailModel } from './model';

/**
 * @export
 * @interface IDebitNoteDetailService
 */
export interface IDebitNoteDetailService {

    /**
     * @returns {Promise<IDebitNoteDetailModel[]>}
     * @memberof IDebitNoteDetailService
     */
    findAll(): Promise<IDebitNoteDetailModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IDebitNoteDetailModel>}
     * @memberof IDebitNoteDetailService
     */
    findOne(code: string): Promise<IDebitNoteDetailModel>;

    /**
     * @param {string} code
     * @param {IDebitNoteDetailModel} IDebitNoteDetailModel
     * @returns {Promise<IDebitNoteDetailModel>}
     * @memberof IDebitNoteDetailService
     */
    updateOne(code: string, IDebitNoteDetailModel: IDebitNoteDetailModel): Promise<IDebitNoteDetailModel>;

    /**
     * @param {IDebitNoteDetailModel} IDebitNoteDetailModel
     * @returns {Promise<IDebitNoteDetailModel>}
     * @memberof IDebitNoteDetailService
     */
    insert(IDebitNoteDetailModel: IDebitNoteDetailModel): Promise<IDebitNoteDetailModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IDebitNoteDetailService
     */
    remove(id: string): void;
}
