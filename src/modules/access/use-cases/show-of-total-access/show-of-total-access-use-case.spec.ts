import { FakeAccessProvider } from "@shared/providers/access-provider/fakes/fake-access-provider";

import { ShowOfTotalAccessUseCase } from "./show-of-total-access-use-case";

let fakeAccessProvider: FakeAccessProvider;

let sut: ShowOfTotalAccessUseCase;

describe("ShowOfTotalAccess", () => {
  it("should be able to show total of access", async () => {
    fakeAccessProvider = new FakeAccessProvider();

    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo");
    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo");
    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo");
    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo2");

    sut = new ShowOfTotalAccessUseCase(fakeAccessProvider);

    const totalOfAccess = await sut.execute();

    expect(totalOfAccess).toBe(3);
  });
});
