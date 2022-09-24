import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { RsGetParamsDto } from './dto';

import { Params } from './entities';
import { IRqRsFactory, RQ_RS_FACTORY_SERVICE } from './interfaces';

/* ------------------------------------------------- */

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Params)
    private readonly paramsRepository: Repository<Params>,

    @Inject(RQ_RS_FACTORY_SERVICE)
    private readonly rqRsFactoryService: IRqRsFactory,
  ) {}

  /* --------------- */

  async getParams(): Promise<RsGetParamsDto> {
    let rsGetParamsDto: RsGetParamsDto = null;
    try {
      const res: Params[] = await this.paramsRepository.find();
      if (res) {
        rsGetParamsDto = this.rqRsFactoryService.getDTOResponse(
          HttpStatus.OK,
          '',
          res,
        );
      } else {
        rsGetParamsDto = this.rqRsFactoryService.getDTOResponse(
          HttpStatus.NOT_FOUND,
          'Get params not found',
          null,
        );
      }
    } catch (e) {
      rsGetParamsDto = this.rqRsFactoryService.getDTOResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        'Failed to get params',
        null,
      );
    }
    console.log('[ms-params-get][service] (', rsGetParamsDto, ')');

    return rsGetParamsDto;
  }
}

/* ------------------------------------------------- */
