import { User } from "@modules/accounts/entities/user";
import { IUsersRepository } from "@modules/accounts/repositories/iusers-repository";
import { AppError } from "@shared/errors/app-error";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
}

@injectable()
class ListUserByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<User | undefined> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists");
    }

    return user;
  }
}

export { ListUserByIdUseCase };
