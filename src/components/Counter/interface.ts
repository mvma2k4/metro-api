import { ICounterModel } from './model';

/**
 * @export
 * @interface ICounterService
 */
export interface ICounterService {

    /**
     * @returns {Promise<ICounterModel[]>}
     * @memberof ICounterService
     */
    findAll(): Promise<ICounterModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICounterModel>}
     * @memberof ICounterService
     */
    findOne(code: string): Promise<ICounterModel>;

    /**
     * @param {string} code
     * @param {ICounterModel} ICounterModel
     * @returns {Promise<ICounterModel>}
     * @memberof ICounterService
     */
    updateOne(code: string, ICounterModel: ICounterModel): Promise<ICounterModel>;

    /**
     * @param {ICounterModel} ICounterModel
     * @returns {Promise<ICounterModel>}
     * @memberof ICounterService
     */
    insert(ICounterModel: ICounterModel): Promise<ICounterModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof ICounterService
     */
    remove(id: string): void;
}
