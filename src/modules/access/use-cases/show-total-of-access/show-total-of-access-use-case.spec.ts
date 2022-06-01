import { FakeAccessProvider } from "@shared/providers/access-provider/fakes/fake-access-provider";

import { ShowTotalOfAccessUseCase } from "./show-total-of-access-use-case";

let fakeAccessProvider: FakeAccessProvider;

let sut: ShowTotalOfAccessUseCase;

describe("ShowTotalOfAccess", () => {
  it("should be able to show total of access", async () => {
    fakeAccessProvider = new FakeAccessProvider();

    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo");
    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo");
    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo");
    fakeAccessProvider.increaseAccess("ton", "challenge-ricardo2");

    sut = new ShowTotalOfAccessUseCase(fakeAccessProvider);

    const totalOfAccess = await sut.execute();

    expect(totalOfAccess).toBe(3);
  });
});
