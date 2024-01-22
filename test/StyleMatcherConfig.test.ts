import { RedocTryItOutConfig } from "../src/config/redoc-try-it-out-config";
import { StyleMatcherConfig } from "../src/config/style-matcher.config";
import { SwaggerConfig } from "../src/config/swagger-config";

describe("StyleMatcherConfig", () => {
  test("test that config can be overridden", () => {
    // dummy initialization
    const swaggerConfig = new SwaggerConfig({}, "http://vg.no", true);
    // dummy initialization
    const redocTryItOutConfig = new RedocTryItOutConfig("http://vg.no", {});

    const config = new StyleMatcherConfig(
      {
        authBtnSourceSelector: "other-authBtnSourceSelector",
        apiContentSourceSelector: "other-apiContentSourceSelector",
        // private
        summaryTargetSelector: "other-summaryTargetSelector",
      },
      swaggerConfig,
      redocTryItOutConfig,
    );

    expect(config.summaryTargetSelector).toEqual(
      "#swagger-ui other-summaryTargetSelector",
    );
    expect(config.authBtnSourceSelector).toEqual(
      "#redoc-container other-authBtnSourceSelector",
    );
    expect(config.apiContentSourceSelector).toEqual(
      "#redoc-container other-apiContentSourceSelector",
    );
  });
});
