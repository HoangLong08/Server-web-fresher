import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      console.log('res: ', res);

      this.logger.log(
        `Logging HTTP request ${req.method} ${
          req.protocol + '://' + req.hostname
        } ${req.originalUrl} ${res.statusCode}`,
      );
    });
    next();
  }
}
