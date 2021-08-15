import "reflect-metadata";
import {
  container,
  instanceCachingFactory,
  DependencyContainer,
} from "tsyringe";
import { LogService, NeedConstructLogService } from "./service/LogService";
import { InjectionToken } from "./constants/constant";
import {
  ClientController,
  ClientNeedConstructController,
} from "./controller/ClientController";
import { Loggable, Loggable2 } from "./interface";

// LogService をDIコンテナーに登録する
// => LogService というトークンに対して、シングルトンが作られるよう登録している
// container.registerSingleton(InjectionToken.Service.LogService, LogService);

// => LogService というトークンに対して、通常のインスタンスが作られるよう登録している
container.register(InjectionToken.Service.LogService, { useClass: LogService });
container.register<Loggable2>(InjectionToken.Service.LogFactory, {
  useFactory: instanceCachingFactory((diContainer: DependencyContainer) => {
    console.log("new factory");
    return new NeedConstructLogService("param");
    // constructorにFactory関数がある場合
    // const barLogic = diContainer.resolve(InjectionToken.Service.LogFactory)
    // return new NeedConstructLogService(barLogic)
  }),
});
container.registerSingleton(
  InjectionToken.Service.NeedConstructLogService,
  InjectionToken.Service.LogFactory
);
const client = container.resolve(ClientController);
const client2 = container.resolve(ClientNeedConstructController);

client.execute();
client.execute();
client2.execute();
client2.execute();
