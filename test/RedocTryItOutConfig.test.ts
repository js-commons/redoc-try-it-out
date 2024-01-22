import { RedocTryItOutConfig } from '../src/config/redoc-try-it-out-config';

describe('RedocTryItOutConfig', () => {
    test('test that config can be overridden', () => {
        const config = new RedocTryItOutConfig("", { 
            redocVersion: "foo",
            containerId: "other-containerId",
            operationBoxSelector: "other-operationBoxSelector",
            tryItOutEnabled: false,
            tryItBoxContainerId: "other-tryItBoxContainerId",
            selectedOperationClass: "dont-try",
            dependenciesVersions: {
                jquery: "0.1",
                jqueryScrollTo: "0.3"
            }
         })
         
        expect(config.redocVersion).toEqual("foo");
        expect(config.tryItOutEnabled).toEqual(false);
        expect(config.tryItBoxContainerId).toEqual("other-tryItBoxContainerId");
        expect(config.containerId).toEqual("other-containerId");
        expect(config.containerSelector).toEqual("#other-containerId");
        expect(config.operationBoxSelector).toEqual("#other-containerId other-operationBoxSelector");
        expect(config.selectedOperationClass).toEqual("dont-try");
        expect(config.dependenciesVersions).toEqual({"jquery": "0.1", "jqueryScrollTo": "0.3"});
    });
})
