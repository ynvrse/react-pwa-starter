interface AppConfig {
    name: string;
    github: {
        title: string;
        url: string;
    };
    author: {
        name: string;
        url: string;
    };
}

export const appConfig: AppConfig = {
    name: 'React PWA',
    github: {
        title: 'React Shadcn Starter',
        url: 'https://github.com/ynvrse/react-pwa-starter',
    },
    author: {
        name: 'ynvrse',
        url: 'https://github.com/ynvrse/',
    },
};
