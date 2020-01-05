import { Router } from 'express';
import { ServiceTypeComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', ServiceTypeComponent.findAll);

router.post('/', ServiceTypeComponent.create);

router.put('/', ServiceTypeComponent.update);

router.get('/:id', ServiceTypeComponent.findOne);

router.delete('/:id', ServiceTypeComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
