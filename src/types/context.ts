import { ReactNode } from "react"

export type ThemeContextProps = {
	children: ReactNode
}

export type ThemeContextType = {
	theme: string
	toggleTheme: () => void
}

export enum ThemeVariantEnum {
	LIGHT = 'light',
	DARK = 'dark',
}