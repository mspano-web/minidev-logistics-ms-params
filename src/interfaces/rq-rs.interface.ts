import { RsGetParamsDto } from "src/dto";
import { Params } from "src/entities";

//   interface and provide that token when injecting to an interface type.
export const RQ_RS_FACTORY_SERVICE = 'RQ_RS_FACTORY_SERVICE';

/* ----------------------- */

export interface IRqRsFactory {
  getDTOResponse(
    statusCode: number,
    message: string,
    params: Params[],
  ): RsGetParamsDto;
}

/* ----------------------- */

