import "reflect-metadata";
import { injectable, container } from "tsyringe";

// Clientが依存する = 注入されるもの
export class LogService {
  private counter = 0;
  constructor() {
    console.log("LogService instantiated.");
  }
  log(message: string) {
    console.log(`(${this.counter++}): ${message}`);
  }
}

@injectable()
export class Client {
  // ↓結局 LogService で初期化してるので、LogService の実装に依存している
  constructor(private service: LogService) {
    console.log("Client instantiated.");
  }
  execute() {
    this.service.log("test");
  }
}

// clientのインスタンス化をDIコンテナに頼むと、
// DIコンテナが LogService をインスタンス化して与えてくれる。
const client = container.resolve(Client);
const client2 = container.resolve(Client);
client.execute();
client.execute();
client2.execute();
client2.execute();
