import express from 'express';
import {getMongoRepository, getMongoManager} from "typeorm";
import { User } from '../../models/User';
import CustumReq from '../../types';
import { isUserAllreadyExist } from '../../middleware/auth';
import { body, check } from 'express-validator';
const router = express.Router();


router.get('/', (req: CustumReq, res)=> {
    res.send('welcom to /auth path')
});

router.post('/register' ,(req : CustumReq, res) => {
    const userRepository = getMongoRepository(User);

    const sess = req.session;
    const user = new User();
    user.email = 'email@gmail.com';
    user.fname = 'jonhn';
    user.lname = 'doe';
    user.password = 'password';
    user.isActive = true;
    // await userRepository.save(user);
    // sess.userId = user.id.toString();
    userRepository.findOneOrFail({where:{_id:'3453422424'}}).then(user =>{
        console.log("🚀 ~ file: index.ts ~ line 29 ~ router.post ~ user")
         res.send(user)});
    // res.send("not found"); 
});

export default router;