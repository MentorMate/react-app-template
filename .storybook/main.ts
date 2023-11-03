import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    core: {
        disableTelemetry: true,
    },
    viteFinal(config) {
        return mergeConfig(config, {
            build: {
                // disable chunk size warning when building Storybook
                // such limits should be placed in the application production build instead
                chunkSizeWarningLimit: Infinity,
            },
        });
    },
};
export default config;
