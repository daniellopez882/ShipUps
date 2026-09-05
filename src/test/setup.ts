import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// next/font/google fetches from Google at build time; under test it is a stub.
vi.mock('next/font/google', () => ({
    Geist: () => ({ variable: '--font-geist-sans', className: 'geist' }),
    Geist_Mono: () => ({ variable: '--font-geist-mono', className: 'geist-mono' }),
    Lato: () => ({ variable: '--font-lato', className: 'lato' }),
}));

afterEach(() => {
    cleanup();
});
