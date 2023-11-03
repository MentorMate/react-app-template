import { useState } from 'react';

import { increment } from '@services/increment';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(increment)}>count is {count}</button>;
};
