import { RsGenericHeaderDto } from './rs-generic-header.dto';

/* ------------------------------------------------ */

export class ParamsDto {
  key: string;
  value: string;
}

/* ---------------- */

export class RsGetParamsDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  paramsDto: ParamsDto[];

  constructor(
    rsGenericHeaderDto: RsGenericHeaderDto,
    paramsDto: ParamsDto[],
  ) {
    this.rsGenericHeaderDto = rsGenericHeaderDto;
    this.paramsDto = paramsDto;
  }
}

/* ------------------------------------------------ */
