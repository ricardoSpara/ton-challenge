import { User } from "@modules/accounts/entities/user";
import { getRepository, Repository } from "typeorm";

import { IUsersRepository } from "../iusers-repository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async save(user: User): Promise<void> {
    await this.repository.save(user);
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.repository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  async findByCpf(cpf: string): Promise<User | undefined> {
    const user = this.repository.findOne({
      where: {
        cpf,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export { UsersRepository };
