import DebitNoteDetailService from './service';
import { HttpError } from '../../config/error';
import { IDebitNoteDetailModel } from './model';
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
        const counters: IDebitNoteDetailModel[] = await DebitNoteDetailService.findAll();

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
        const DebitNoteDetail: IDebitNoteDetailModel = await DebitNoteDetailService.findOne(req.params.id);

        res.status(200).json(DebitNoteDetail);
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
        const DebitNoteDetail: IDebitNoteDetailModel = await DebitNoteDetailService.insert(req.body);

        res.status(201).json(DebitNoteDetail);
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
        const DebitNoteDetail: IDebitNoteDetailModel = await DebitNoteDetailService.updateOne(req.body.uuid, req.body);

        res.status(201).json(DebitNoteDetail);
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
        await DebitNoteDetailService.remove(req.params.id);

        res.status(200).json(null);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
