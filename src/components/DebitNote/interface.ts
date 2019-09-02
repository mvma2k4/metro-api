import { IDebitNoteModel } from './model';

/**
 * @export
 * @interface IDebitNoteService
 */
export interface IDebitNoteService {

    /**
     * @returns {Promise<IDebitNoteModel[]>}
     * @memberof IDebitNoteService
     */
    findAll(): Promise<IDebitNoteModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IDebitNoteModel>}
     * @memberof IDebitNoteService
     */
    findOne(code: string): Promise<IDebitNoteModel>;

    /**
     * @param {string} code
     * @param {IDebitNoteModel} IDebitNoteModel
     * @returns {Promise<IDebitNoteModel>}
     * @memberof IDebitNoteService
     */
    updateOne(code: string, IDebitNoteModel: IDebitNoteModel): Promise<IDebitNoteModel>;

    /**
     * @param {IDebitNoteModel} IDebitNoteModel
     * @returns {Promise<IDebitNoteModel>}
     * @memberof IDebitNoteService
     */
    insert(IDebitNoteModel: IDebitNoteModel): Promise<IDebitNoteModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IDebitNoteService
     */
    remove(id: string): void;
}
