import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();



router.post('/', (req, res) => {
  setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);
    console.log(isValid);
    if(!isValid) {console.log(errors);
      res.json(errors);
    }
  }, 5000);
});

export default router;
