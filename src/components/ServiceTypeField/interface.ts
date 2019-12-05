import { IServiceTypeFieldModel } from './model';

/**
 * @export
 * @interface IServiceTypeFieldService
 */
export interface IServiceTypeFieldService {

    /**
     * @returns {Promise<IServiceTypeFieldModel[]>}
     * @memberof IServiceTypeFieldService
     */
    findAll(): Promise<IServiceTypeFieldModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IServiceTypeFieldModel>}
     * @memberof IServiceTypeFieldService
     */
    findOne(code: string): Promise<IServiceTypeFieldModel>;

    /**
     * @param {string} code
     * @param {IServiceTypeFieldModel} IServiceTypeFieldModel
     * @returns {Promise<IServiceTypeFieldModel>}
     * @memberof IServiceTypeFieldService
     */
    updateOne(code: string, IServiceTypeFieldModel: IServiceTypeFieldModel): Promise<IServiceTypeFieldModel>;

    /**
     * @param {IServiceTypeFieldModel} IServiceTypeFieldModel
     * @returns {Promise<IServiceTypeFieldModel>}
     * @memberof IServiceTypeFieldService
     */
    insert(IServiceTypeFieldModel: IServiceTypeFieldModel): Promise<IServiceTypeFieldModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IServiceTypeFieldService
     */
    remove(id: string): void;
}
