import { pascalCase } from 'change-case';

export default function (plop) {
    plop.setGenerator('feature', {
        description: 'Application Feature',
        prompts: [
            {
                type: 'input',
                name: 'name',
                validate(input) {
                    return input.length > 0;
                },
                transformer: pascalCase,
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/features/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'generators/feature/feature.hbs',
            },
            {
                type: 'add',
                path: 'src/features/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'generators/feature/feature.test.hbs',
            },
            {
                type: 'add',
                path: 'src/features/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'generators/feature/feature.stories.hbs',
            },
        ],
    });

    plop.setGenerator('service', {
        description: 'Application Service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                validate(input) {
                    return input.length > 0;
                },
                transformer: pascalCase,
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/services/{{dashCase name}}.ts',
                templateFile: 'generators/service/service.hbs',
            },
            {
                type: 'add',
                path: 'src/services/{{dashCase name}}.test.ts',
                templateFile: 'generators/service/service.test.hbs',
            },
        ],
    });
}
