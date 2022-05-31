import { UserFactory } from "@modules/accounts/factories/user-factory";
import { FakeUsersRepository } from "@modules/accounts/repositories/fakes/fake-users-repository";

import { AppError } from "@shared/errors/app-error";
import { generateId } from "@shared/helpers";
import { FakeHashProvider } from "@shared/providers/hash-provider/fakes/fake-hash-provider";

import { CreateUserUseCase } from "./create-user-use-case";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;

let sut: CreateUserUseCase;

describe("CreateUser", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    sut = new CreateUserUseCase(fakeUsersRepository, fakeHashProvider);
  });

  it("should be able to create a user", async () => {
    const user = await sut.execute({
      full_name: "John doe",
      email: "johndoe@test.com",
      password: "test@123",
      cpf: "941.161.440-02",
    });

    expect(user).toHaveProperty("id");
    expect(user.cpf).toBeTruthy();
  });

  it("should not be able to create a new user with same e-mail another", async () => {
    const userData = {
      id: generateId(),
      full_name: "John doe",
      email: "johndoe@test.com",
      password: "test@123",
      cpf: "941.161.440-02",
    };

    const user = UserFactory.create(userData);
    fakeUsersRepository.save(user);

    await expect(sut.execute(userData)).rejects.toEqual(
      new AppError("Email address already used")
    );
  });

  it("should not be able to create a new user with same cpf another", async () => {
    const userData = {
      id: generateId(),
      full_name: "John doe",
      email: "johndoe@test.com",
      password: "test@123",
      cpf: "941.161.440-02",
    };

    const user = UserFactory.create(userData);
    fakeUsersRepository.save(user);

    userData.email = "johndoe2@test.com";

    await expect(sut.execute(userData)).rejects.toEqual(
      new AppError("Cpf already used")
    );
  });
});
