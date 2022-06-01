import { FakeAccessProvider } from "@shared/providers/access-provider/fakes/fake-access-provider";

import { IncreaseAccessUseCase } from "./increase-access-use-case";

let fakeAccessProvider: FakeAccessProvider;

let sut: IncreaseAccessUseCase;

describe("IncreaseAccess", () => {
  beforeEach(() => {
    fakeAccessProvider = new FakeAccessProvider();

    sut = new IncreaseAccessUseCase(fakeAccessProvider);
  });

  it("should be able to increase access", async () => {
    sut.execute();
    sut.execute();

    const { totalOfAccess } = fakeAccessProvider;

    expect(totalOfAccess["ton"]["challenge-ricardo"]).toBe(2);
  });
});
