import { render, screen } from '@testing-library/react'
import { describe, it } from "vitest"

import App from "./App"

describe('App', () => {
    it('It should render correctly', () => {
        render(<App />)

        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Vite + React + React-hook-form + Zod')
    })
 })