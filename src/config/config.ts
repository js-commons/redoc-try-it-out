export const Config = {

    parseOptions: <THIZ extends Record<string, any>, T extends Record<string, any>>(thiz: THIZ, options: T) => {
        Object.keys(options).forEach(key => {
            // We add underscore to the key if its not a property directly defined in thiz,
            // to enable setting private variables, that begin with underscore.
            // This was previously using the `in` keyword which returned true if field was inherited from interface.
            // Now using hasOwnProperty to ensure its defined in the object/class passed in as thiz.
            // NOTE: This is a huge hack and goes against the value of using Typescript
            const option = thiz.hasOwnProperty(key) ? key : `_${key}`;
            if (option in thiz) {
                thiz[option as keyof THIZ] = options[key];
            }
        });
    },

    cdnUrl: 'https://cdn.jsdelivr.net/npm/'
}