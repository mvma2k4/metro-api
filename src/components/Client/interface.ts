import { IClientModel } from './model';

/**
 * @export
 * @interface IClientService
 */
export interface IClientService {

    /**
     * @returns {Promise<IClientModel[]>}
     * @memberof IClientService
     */
    findAll(): Promise<IClientModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IClientModel>}
     * @memberof IClientService
     */
    findOne(code: string): Promise<IClientModel>;

    /**
     * @param {string} code
     * @param {IClientModel} IClientModel
     * @returns {Promise<IClientModel>}
     * @memberof IClientService
     */
    updateOne(code: string, IClientModel: IClientModel): Promise<IClientModel>;

    /**
     * @param {IClientModel} IClientModel
     * @returns {Promise<IClientModel>}
     * @memberof IClientService
     */
    insert(IClientModel: IClientModel): Promise<IClientModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IClientService
     */
    remove(id: string): void;
}
