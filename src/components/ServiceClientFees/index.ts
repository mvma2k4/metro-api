import ServiceClientFeesService from './service';
import { HttpError } from '../../config/error';
import { IServiceClientFeesModel } from './model';
import { NextFunction, Request, Response } from 'express';
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const counters: IServiceClientFeesModel[] = await ServiceClientFeesService.findAll();

        res.status(200).json(counters);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const ServiceClientFees: IServiceClientFeesModel = await ServiceClientFeesService.findOne(req.params.id);

        res.status(200).json(ServiceClientFees);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const ServiceClientFees: IServiceClientFeesModel = await ServiceClientFeesService.insert(req.body);

        res.status(201).json(ServiceClientFees);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const ServiceClientFees: IServiceClientFeesModel = await ServiceClientFeesService.updateOne(req.body.uuid, req.body);

        res.status(201).json(ServiceClientFees);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        await ServiceClientFeesService.remove(req.params.id);

        res.status(200).json(null);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
