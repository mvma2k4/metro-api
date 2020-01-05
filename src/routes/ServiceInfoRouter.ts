import { Router } from 'express';
import { ServiceInfoComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', ServiceInfoComponent.findAll);

router.post('/', ServiceInfoComponent.create);

router.put('/', ServiceInfoComponent.update);

router.get('/:id', ServiceInfoComponent.findOne);

router.delete('/:id', ServiceInfoComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
