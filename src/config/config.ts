export const Config = {

    parseOptions: <THIZ extends Record<string, any>, T extends Record<string, any>>(thiz: THIZ, options: T) => {
        Object.keys(options).forEach(key => {
            if (thiz.hasOwnProperty(key)) {
                thiz[key as keyof THIZ] = options[key];
            }
        });
    },

    cdnUrl: 'https://cdn.jsdelivr.net/npm/'
}