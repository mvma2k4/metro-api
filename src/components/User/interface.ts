import { IUserModelStatic } from './model';

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<IUserModelStatic[]>}
     * @memberof IUserService
     */
    findAll(): Promise<IUserModelStatic[]>;

    /**
     * @param {string} code
     * @returns {Promise<IUserModelStatic>}
     * @memberof IUserService
     */
    findOne(code: string): Promise<IUserModelStatic>;

    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModelStatic>}
     * @memberof IUserService
     */
    insert(IUserModel: IUserModelStatic): Promise<IUserModelStatic>;

    /**
     * @param {string} id
     * @returns {Promise<IUserModelStatic>}
     * @memberof IUserService
     */
    remove(id: string): Promise<IUserModelStatic>;
}
