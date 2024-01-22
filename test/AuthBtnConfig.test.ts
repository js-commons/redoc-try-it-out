import { AuthBtnConfig } from '../src/config/auth-btn-config';

describe('AuthBtnConfig', () => {
    test('test that config can be overridden', () => {
        const config = new AuthBtnConfig({
            className: "other-className",
            posSelector: "other-posSelector",
            text: "other-text"
        });
        
        expect(config.className).toEqual("other-className");
        expect(config.posSelector).toEqual("other-posSelector");
        expect(config.text).toEqual("other-text");
    });
});
