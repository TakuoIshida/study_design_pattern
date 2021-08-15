import { singleton } from "tsyringe";
import { Loggable, Loggable2 } from "../interface";

@singleton()
export class LogService implements Loggable {
  private counter = 0;
  constructor() {
    console.log("LogService initialized");
  }
  log(message: string): void {
    console.log(` ${this.counter++} times called this message: ${message}`);
  }
}

@singleton()
export class NeedConstructLogService implements Loggable2 {
  constructor(private header: string) {
    console.log("NeedConstructLogService initialized");
  }
  log(message: string): void {
    console.log(` ${this.header} . message: ${message}`);
  }
}
