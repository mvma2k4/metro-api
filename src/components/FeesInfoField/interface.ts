import { IFeesInfoFieldModel } from './model';

/**
 * @export
 * @interface IFeesInfoFieldService
 */
export interface IFeesInfoFieldService {

    /**
     * @returns {Promise<IFeesInfoFieldModel[]>}
     * @memberof IFeesInfoFieldService
     */
    findAll(): Promise<IFeesInfoFieldModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IFeesInfoFieldModel>}
     * @memberof IFeesInfoFieldService
     */
    findOne(code: string): Promise<IFeesInfoFieldModel>;

    /**
     * @param {string} code
     * @param {IFeesInfoFieldModel} IFeesInfoFieldModel
     * @returns {Promise<IFeesInfoFieldModel>}
     * @memberof IFeesInfoFieldService
     */
    updateOne(code: string, IFeesInfoFieldModel: IFeesInfoFieldModel): Promise<IFeesInfoFieldModel>;

    /**
     * @param {IFeesInfoFieldModel} IFeesInfoFieldModel
     * @returns {Promise<IFeesInfoFieldModel>}
     * @memberof IFeesInfoFieldService
     */
    insert(IFeesInfoFieldModel: IFeesInfoFieldModel): Promise<IFeesInfoFieldModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IFeesInfoFieldService
     */
    remove(id: string): void;
}
