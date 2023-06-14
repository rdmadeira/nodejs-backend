import express, { Request, Response, NextFunction } from 'express';
import { User } from 'UserModule';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const body: { userId: string | number; user?: User } = req.body;

  res.status(200).json({ data: body });
});

app.listen(3002, () => console.log('Server initialized on port: 3002'));
