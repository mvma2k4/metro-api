import { Router } from 'express';
import { DebitNoteComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', DebitNoteComponent.findAll);

router.post('/', DebitNoteComponent.create);

router.put('/', DebitNoteComponent.update);

router.get('/:id', DebitNoteComponent.findOne);

router.delete('/:id', DebitNoteComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
