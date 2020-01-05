import { Router } from 'express';
import { ServiceTypeFieldComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', ServiceTypeFieldComponent.findAll);

router.post('/', ServiceTypeFieldComponent.create);

router.put('/', ServiceTypeFieldComponent.update);

router.get('/:id', ServiceTypeFieldComponent.findOne);

router.delete('/:id', ServiceTypeFieldComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
