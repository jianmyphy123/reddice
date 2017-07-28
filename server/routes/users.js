import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();



router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(isValid) {
    res.json({ success: true });
  } else {
    res.json(errors);
  }
});

export default router;
