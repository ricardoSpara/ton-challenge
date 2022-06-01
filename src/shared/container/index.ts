import { UsersRepository } from "@modules/accounts/repositories/implementations/users-repository";
import { IUsersRepository } from "@modules/accounts/repositories/iusers-repository";
import { container } from "tsyringe";

import { IHashProvider } from "@shared/providers/hash-provider/ihash-provider";
import { BCryptHashProvider } from "@shared/providers/hash-provider/implementations/bcrypt-hash-provider";

import { IAccessProvider } from "@shared/providers/access-provider/iaccess-provider";
import { CounterApiProvider } from "@shared/providers/access-provider/implementations/counter-api-provider";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
container.registerSingleton<IAccessProvider>(
  "AccessProvider",
  CounterApiProvider
);
