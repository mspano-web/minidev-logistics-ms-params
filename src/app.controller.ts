import { Controller, } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AppService } from './app.service';

/* ------------------------------------------------- */

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  /* ---------------- */

  @MessagePattern('ms-params-get') 
  async getParams(): Promise<string> {

    return JSON.stringify(await this.appService.getParams());
  }

}

/* ------------------------------------------------- */
