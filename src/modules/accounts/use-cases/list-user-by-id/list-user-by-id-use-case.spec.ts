import { UserFactory } from "@modules/accounts/factories/user-factory";
import { FakeUsersRepository } from "@modules/accounts/repositories/fakes/fake-users-repository";

import { AppError } from "@shared/errors/app-error";
import { generateId } from "@shared/helpers";
import { FakeHashProvider } from "@shared/providers/hash-provider/fakes/fake-hash-provider";

import { ListUserByIdUseCase } from "./list-user-by-id-use-case";

let fakeUsersRepository: FakeUsersRepository;

let sut: ListUserByIdUseCase;

describe("ListUserById", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    sut = new ListUserByIdUseCase(fakeUsersRepository);
  });

  it("should be able to list an user by id", async () => {
    const user = await UserFactory.create({
      id: generateId(),
      full_name: "jon doe",
      email: "johndoe@test.com",
      password: "test@123",
      cpf: "941.161.440-02",
    });

    fakeUsersRepository.save(user);

    const findUser = await sut.execute({user_id: user.id});

    expect(findUser?.id).toBe(user.id);
  });


  it("should not be able to show user with the user that does not exists", async () => {
    const userId =  "non-exists-id";

    await expect(
      sut.execute({user_id: userId})
    ).rejects.toEqual(new AppError("User does not exists"));
  });
});
