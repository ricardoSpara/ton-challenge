import { User } from "@modules/accounts/entities/user";
import { IUsersRepository } from "@modules/accounts/repositories/iusers-repository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<User[]> {
    const allUsers = await this.usersRepository.list();

    return allUsers;
  }
}

export { ListUserUseCase };
