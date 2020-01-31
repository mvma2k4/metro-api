import { IServiceInfoModel } from './model';

/**
 * @export
 * @interface IServiceInfoService
 */
export interface IServiceInfoService {

    /**
     * @returns {Promise<IServiceInfoModel[]>}
     * @memberof IServiceInfoService
     */
    findAll(): Promise<IServiceInfoModel[]>;

    /**
     * @returns {Promise<IServiceInfoModel[]>}
     * @memberof IServiceInfoService
     */
    findAllByProvider(id: string): Promise<IServiceInfoModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IServiceInfoModel>}
     * @memberof IServiceInfoService
     */
    findOne(code: string): Promise<IServiceInfoModel>;

    /**
     * @param {string} code
     * @param {IServiceInfoModel} IServiceInfoModel
     * @returns {Promise<IServiceInfoModel>}
     * @memberof IServiceInfoService
     */
    updateOne(code: string, IServiceInfoModel: IServiceInfoModel): Promise<IServiceInfoModel>;

    /**
     * @param {IServiceInfoModel} IServiceInfoModel
     * @returns {Promise<IServiceInfoModel>}
     * @memberof IServiceInfoService
     */
    insert(IServiceInfoModel: IServiceInfoModel): Promise<IServiceInfoModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IServiceInfoService
     */
    remove(id: string): void;
}
