import { IProviderModel } from './model';

/**
 * @export
 * @interface IProviderService
 */
export interface IProviderService {

    /**
     * @returns {Promise<IProviderModel[]>}
     * @memberof IProviderService
     */
    findAll(): Promise<IProviderModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IProviderModel>}
     * @memberof IProviderService
     */
    findOne(code: string): Promise<IProviderModel>;

    /**
     * @param {string} code
     * @param {IProviderModel} IProviderModel
     * @returns {Promise<IProviderModel>}
     * @memberof IProviderService
     */
    updateOne(code: string, IProviderModel: IProviderModel): Promise<IProviderModel>;

    /**
     * @param {IProviderModel} IProviderModel
     * @returns {Promise<IProviderModel>}
     * @memberof IProviderService
     */
    insert(IProviderModel: IProviderModel): Promise<IProviderModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IProviderService
     */
    remove(id: string): void;
}
