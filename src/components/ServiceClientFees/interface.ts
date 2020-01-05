import { IServiceClientFeesModel } from './model';

/**
 * @export
 * @interface IServiceClientFeesService
 */
export interface IServiceClientFeesService {

    /**
     * @returns {Promise<IServiceClientFeesModel[]>}
     * @memberof IServiceClientFeesService
     */
    findAll(): Promise<IServiceClientFeesModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IServiceClientFeesModel>}
     * @memberof IServiceClientFeesService
     */
    findOne(code: string): Promise<IServiceClientFeesModel>;

    /**
     * @param {string} code
     * @param {IServiceClientFeesModel} IServiceClientFeesModel
     * @returns {Promise<IServiceClientFeesModel>}
     * @memberof IServiceClientFeesService
     */
    updateOne(code: string, IServiceClientFeesModel: IServiceClientFeesModel): Promise<IServiceClientFeesModel>;

    /**
     * @param {IServiceClientFeesModel} IServiceClientFeesModel
     * @returns {Promise<IServiceClientFeesModel>}
     * @memberof IServiceClientFeesService
     */
    insert(IServiceClientFeesModel: IServiceClientFeesModel): Promise<IServiceClientFeesModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IServiceClientFeesService
     */
    remove(id: string): void;
}
