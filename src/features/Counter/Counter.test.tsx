import { expect, test } from 'vitest';

import { setup } from '@tests/setup';
import { Counter } from './Counter';

test('increment count on click', async () => {
    const { user, getByRole } = setup(<Counter />);

    await user.click(getByRole('button', { name: /^count is/i }));
    const button = getByRole('button', { name: /^count is/i });

    expect(button).toHaveTextContent('count is 1');
});
