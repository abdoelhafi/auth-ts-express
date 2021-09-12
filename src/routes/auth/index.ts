import express from 'express';

import { Request, Response } from 'express';
import { Session, SessionData } from 'express-session';

const router = express.Router();

type CustumReq =  Request & {
    session: Session & Partial<SessionData> & { userId: string };
};

router.get('/', (req: CustumReq, res)=> {
    const sess = req.session;
    if (sess.userId) {
        res.send('hello from auth route'+sess.id);
    }else{
        sess.userId = "kajlfkldl"
        res.send('refrech'); 
    }
});

export default router;