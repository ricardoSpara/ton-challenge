import { UserFactory } from "@modules/accounts/factories/user-factory";
import { FakeUsersRepository } from "@modules/accounts/repositories/fakes/fake-users-repository";

import { AppError } from "@shared/errors/app-error";
import { generateId } from "@shared/helpers";
import { FakeHashProvider } from "@shared/providers/hash-provider/fakes/fake-hash-provider";

import { ListUserUseCase } from "./list-user-use-case";

let fakeUsersRepository: FakeUsersRepository;

let sut: ListUserUseCase;

describe("ListUser", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    sut = new ListUserUseCase(fakeUsersRepository);
  });

  it("should be able to list all users", async () => {
    const user = await UserFactory.create({
      id: generateId(),
      full_name: "jon doe",
      email: "johndoe@test.com",
      password: "test@123",
      cpf: "941.161.440-02",
    });

    const user2 = await UserFactory.create({
      id: generateId(),
      full_name: "jon doe 2",
      email: "johndoe@test.com",
      password: "test@1234",
      cpf: "941.161.440-03",
    });

    fakeUsersRepository.save(user);
    fakeUsersRepository.save(user2);

    const users = await sut.execute();
    expect(users.length).toBe(2);
  });
});
