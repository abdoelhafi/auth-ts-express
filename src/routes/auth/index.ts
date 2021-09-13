import express from 'express';
import {getConnection} from "typeorm";
import { User } from '../../models/User';
import CustumReq from '../../types';

const router = express.Router();

router.get('/', (req: CustumReq, res)=> {
    res.send('welcom to /auth path')
});

router.post('/register', async (req : CustumReq, res) => {
    const userRepository = getConnection().getRepository(User);

    const sess = req.session;
    if (sess.userId) {
        // verify userId
        
        res.send('hello from auth route: '+sess.userId);
    }else{
        const user = new User();
        user.email = 'email@gmail.com';
        user.fname = 'jonhn';
        user.lname = 'doe';
        user.password = 'password';
        user.isActive = true;
        // const newUser = userRepository.create(user);
        await userRepository.save(user);
        sess.userId = user.id.toString();
        res.send('successfully registerd : '+ user.id); 
    }
});

export default router;