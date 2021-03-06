import { IPermissionModel } from './model';

/**
 * @export
 * @interface IPermissionService
 */
export interface IPermissionService {

    /**
     * @returns {Promise<IPermissionModel[]>}
     * @memberof IPermissionService
     */
    findAll(): Promise<IPermissionModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IPermissionModel>}
     * @memberof IPermissionService
     */
    findOne(code: string): Promise<IPermissionModel>;

    /**
     * @param {IPermissionModel} IUserModel
     * @returns {Promise<IPermissionModel>}
     * @memberof IPermissionService
     */
    insert(IPermissionModel: IPermissionModel): Promise<IPermissionModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IPermissionService
     */
    remove(id: string): void;
}
