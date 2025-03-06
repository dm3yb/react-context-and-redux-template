import { createContext, FC, useCallback, useContext, useState } from 'react'
import {
	ThemeContextProps,
	ThemeContextType,
	ThemeVariantEnum,
} from '../types/context'

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
)

export const ThemeProvider: FC<ThemeContextProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeVariantEnum>(ThemeVariantEnum.LIGHT)

	const toggleTheme = useCallback(() => {
		setTheme(prev => {
			if (prev === ThemeVariantEnum.LIGHT) {
				return ThemeVariantEnum.DARK
			}
			return ThemeVariantEnum.LIGHT
		})
	}, [])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}

	return context
}
