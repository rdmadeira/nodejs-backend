import express, { Request, Response, NextFunction } from 'express';
import { Usertype, User } from 'UserModule';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const body: { userId: string | number; user?: Usertype } = req.body;
  body.user = { name: User2.name, email: User2.email };
  let body2 = User.name || User.email;

  res.status(200).json({ data: body });
});

app.listen(3002, () => console.log('Server initialized on port: 3002'));
