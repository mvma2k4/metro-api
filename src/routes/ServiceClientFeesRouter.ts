import { Router } from 'express';
import { ServiceClientFeesComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', ServiceClientFeesComponent.findAll);

router.post('/', ServiceClientFeesComponent.create);

router.put('/', ServiceClientFeesComponent.update);

router.get('/:id', ServiceClientFeesComponent.findOne);

router.delete('/:id', ServiceClientFeesComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
