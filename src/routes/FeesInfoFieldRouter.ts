import { Router } from 'express';
import { FeesInfoFieldComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();


router.get('/', FeesInfoFieldComponent.findAll);

router.post('/', FeesInfoFieldComponent.create);

router.put('/', FeesInfoFieldComponent.update);

router.get('/:id', FeesInfoFieldComponent.findOne);

router.delete('/:id', FeesInfoFieldComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
