import { RedocTryItOutConfig } from "../src/config/redoc-try-it-out-config";

describe("RedocTryItOutConfig", () => {
  test("test that config can be overridden", () => {
    const config = new RedocTryItOutConfig("", {
      redocVersion: "foo",
      containerId: "other-containerId",
      operationBoxSelector: "other-operationBoxSelector",
      tryItOutEnabled: false,
      tryItBoxContainerId: "other-tryItBoxContainerId",
      selectedOperationClass: "dont-try",
      dependenciesVersions: {
        jquery: "0.1",
        jqueryScrollTo: "0.3",
      },
      theme: {
        spacing: {
          unit: 4,
          sectionHorizontal: 20,
          sectionVertical: 10,
        },
      },
    });

    expect(config.options.redocVersion).toEqual("foo");
    expect(config.options.tryItOutEnabled).toEqual(false);
    expect(config.options.tryItBoxContainerId).toEqual(
      "other-tryItBoxContainerId",
    );
    expect(config.options.containerId).toEqual("other-containerId");
    expect(config.containerSelector).toEqual("#other-containerId");
    expect(config.operationBoxSelector).toEqual(
      "#other-containerId other-operationBoxSelector",
    );
    expect(config.options.selectedOperationClass).toEqual("dont-try");
    expect(config.options.dependenciesVersions).toEqual({
      jquery: "0.1",
      jqueryScrollTo: "0.3",
    });
    expect(config.options.theme).toEqual({
      spacing: {
        unit: 4,
        sectionHorizontal: 20,
        sectionVertical: 10,
      },
    });
  });
});
