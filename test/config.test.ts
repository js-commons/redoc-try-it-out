import { RedocTryItOutConfig } from '../src/config/redoc-try-it-out-config';

test('test that redocVersion can be overridden', () => {
    const foo = new RedocTryItOutConfig("", { 
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
    expect(foo.redocVersion).toEqual("foo");
    expect(foo.tryItOutEnabled).toEqual(false);
    expect(foo.tryItBoxContainerId).toEqual("other-tryItBoxContainerId");
    expect(foo.containerId).toEqual("other-containerId");
    expect(foo.containerSelector).toEqual("#other-containerId");
    expect(foo.operationBoxSelector).toEqual("#other-containerId other-operationBoxSelector");
    expect(foo.selectedOperationClass).toEqual("dont-try");
    expect(foo.dependenciesVersions).toEqual({"jquery": "0.1", "jqueryScrollTo": "0.3"});
});