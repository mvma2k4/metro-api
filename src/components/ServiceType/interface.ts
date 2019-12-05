import { IServiceTypeModel } from './model';

/**
 * @export
 * @interface IServiceTypeService
 */
export interface IServiceTypeService {

    /**
     * @returns {Promise<IServiceTypeModel[]>}
     * @memberof IServiceTypeService
     */
    findAll(): Promise<IServiceTypeModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IServiceTypeModel>}
     * @memberof IServiceTypeService
     */
    findOne(code: string): Promise<IServiceTypeModel>;

    /**
     * @param {string} code
     * @param {IServiceTypeModel} IServiceTypeModel
     * @returns {Promise<IServiceTypeModel>}
     * @memberof IServiceTypeService
     */
    updateOne(code: string, IServiceTypeModel: IServiceTypeModel): Promise<IServiceTypeModel>;

    /**
     * @param {IServiceTypeModel} IServiceTypeModel
     * @returns {Promise<IServiceTypeModel>}
     * @memberof IServiceTypeService
     */
    insert(IServiceTypeModel: IServiceTypeModel): Promise<IServiceTypeModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IServiceTypeService
     */
    remove(id: string): void;
}
