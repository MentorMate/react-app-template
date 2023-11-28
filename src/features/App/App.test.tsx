import { expect, test } from 'vitest';

import { setup } from '@tests/setup';
import { App } from './App';

test('page heading is h1', async () => {
    const { getByRole } = setup(<App />);

    const heading = getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('Vite + React');
});
