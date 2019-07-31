import { IOperatorModel } from './model';

/**
 * @export
 * @interface IOperatorService
 */
export interface IOperatorService {

    /**
     * @returns {Promise<IOperatorModel[]>}
     * @memberof IOperatorService
     */
    findAll(): Promise<IOperatorModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IOperatorModel>}
     * @memberof IOperatorService
     */
    findOne(code: string): Promise<IOperatorModel>;

    /**
     * @param {string} code
     * @param {IOperatorModel} IOperatorModel
     * @returns {Promise<IOperatorModel>}
     * @memberof IOperatorService
     */
    updateOne(code: string, IOperatorModel: IOperatorModel): Promise<IOperatorModel>;

    /**
     * @param {IOperatorModel} IOperatorModel
     * @returns {Promise<IOperatorModel>}
     * @memberof IOperatorService
     */
    insert(IOperatorModel: IOperatorModel): Promise<IOperatorModel>;

    /**
     * @param {string} id
     * @returns {void}
     * @memberof IOperatorService
     */
    remove(id: string): void;
}
