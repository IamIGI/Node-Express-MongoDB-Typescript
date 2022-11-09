import { Request, Response, NextFunction } from 'express';

const requireUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;
    console.log(JSON.parse(JSON.stringify(res.locals)));
    console.log(user);

    if (!user) {
        return res.sendStatus(403);
    }

    return next();
};

export default requireUser;
