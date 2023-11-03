import { expect, test } from 'vitest';

import { increment } from './increment';

test('adds one', () => {
    const count = increment(1);

    expect(count).toBe(2);
});
