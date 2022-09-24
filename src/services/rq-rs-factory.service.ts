import { Injectable } from '@nestjs/common';

import { RsGetParamsDto } from 'src/dto';
import { Params } from 'src/entities';
import { IRqRsFactory } from 'src/interfaces';

/* ------------------------------------------------------- */

@Injectable()
export class RqRsFactoryService implements IRqRsFactory {

  getDTOResponse(
    statusCode: number,
    message: string,
    params: Params[],
  ): RsGetParamsDto {

      return new RsGetParamsDto(
        {statusCode, message},
        {...params}
      );
  
    }

}

/* ------------------------------------------------------- */
