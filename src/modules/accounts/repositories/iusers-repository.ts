import { User } from "../entities/user";

interface IUsersRepository {
  save(user: User): Promise<void>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByCpf(cpf: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUsersRepository };
