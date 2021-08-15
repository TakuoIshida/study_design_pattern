import { inject, injectable } from "tsyringe";
import { InjectionToken } from "../constants/constant";
import { Loggable, Loggable2 } from "../interface";

@injectable()
export class ClientController {
  constructor(
    @inject(InjectionToken.Service.LogService) private logService: Loggable
  ) {
    console.log("Client initialized");
  }

  execute() {
    this.logService.log("test");
  }
}

@injectable()
export class ClientNeedConstructController {
  constructor(
    @inject(InjectionToken.Service.NeedConstructLogService)
    private logService: Loggable2
  ) {
    console.log("NeedConstructLogService initialized");
  }

  execute() {
    this.logService.log("test2");
  }
}
