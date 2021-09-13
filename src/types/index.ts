import { Request, Response } from 'express';
import { Session, SessionData } from 'express-session';

type CustumReq =  Request & {
    session: Session & Partial<SessionData> & { userId: string };
};
export default CustumReq;