import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [theme] = useLocalStorage('theme', 'light')
  const isLight = theme === 'light'

  const getBGWithNormalText = () => {
    return `${isLight ? 'bg-white text-black' : 'bg-bodyColor text-white'}`
  }

  const getBGWithColorText = () => {
    return `${isLight ? 'bg-white text-designColorLight' : 'bg-bodyColor text-designColorDark'}`
  }

  const getColorText = () => {
    return `${isLight ? 'text-designColorLight' : 'text-designColorDark'}`
  }

  return { theme, isLight, getBGWithNormalText, getBGWithColorText, getColorText }
}
