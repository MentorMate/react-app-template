import { Counter } from '@features/Counter/Counter';

import ReactLogo from '@icons/react-logo.svg?react';
import viteLogo from '/vite.svg';

import './App.css';

export const App = () => {
    return (
        <>
            <div className="logos">
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Learn Vite" />
                </a>

                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <span className="visually-hidden">Learn React</span>

                    <ReactLogo className="logo react" />
                </a>
            </div>

            <h1>Vite + React</h1>

            <div className="card">
                <Counter />

                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
};
