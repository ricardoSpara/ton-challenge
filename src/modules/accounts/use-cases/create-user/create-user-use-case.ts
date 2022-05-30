import { ICreateUserDTO } from "@modules/accounts/dtos/icreate-user-dto";
import { User } from "@modules/accounts/entities/user";
import { UserFactory } from "@modules/accounts/factories/user-factory";
import { IUsersRepository } from "@modules/accounts/repositories/iusers-repository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/app-error";
import { generateId } from "@shared/helpers";
import { IHashProvider } from "@shared/providers/hash-provider/ihash-provider";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute({
    full_name,
    email,
    password,
    cpf,
  }: Omit<ICreateUserDTO, "id">): Promise<User> {
    const checkEmailExists = await this.usersRepository.findByEmail(email);

    if (checkEmailExists) {
      throw new AppError("Email address already used");
    }

    const hashedPassword = await this.hashProvider.generateHash(password);
    const userData = {
      full_name,
      email,
      password: hashedPassword,
      id: generateId(),
      cpf,
    } as ICreateUserDTO;

    const user = UserFactory.create(userData);

    await this.usersRepository.save(user);

    return user;
  }
}

export { CreateUserUseCase };
