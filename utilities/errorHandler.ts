import { Application, Request, Response} from 'express';

export default function errorHandler(app: Application) {
  app.use((err: any, req: Request, res: Response, next: any) => {
    res.json({
      errors: {
        message: err.message,
        error: err,
      }
    });
  });
}