import { Router } from 'express';
import { DebitNoteDetailComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', DebitNoteDetailComponent.findAll);

router.post('/', DebitNoteDetailComponent.create);

router.put('/', DebitNoteDetailComponent.update);

router.get('/:id', DebitNoteDetailComponent.findOne);

router.delete('/:id', DebitNoteDetailComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
