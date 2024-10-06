import { useLocalStorage } from 'usehooks-ts'

export const useTheme = () => {
  const [theme] = useLocalStorage('theme', 'light')
  const isLight = theme === 'light'

  const getBGWithNormalText = `${isLight ? 'bg-white text-black' : 'bg-bodyColor text-white'}`
  const getBGWithColorText = `${isLight ? 'bg-white text-designColorLight' : 'bg-bodyColor text-designColorDark'}`
  const getBG = `${isLight ? 'bg-white' : 'bg-bodyColor'}`
  const getBGHoverText = `${isLight ? 'bg-designColorLight group-hover:bg-designColorDark' : 'bg-designColorDark group-hover:bg-designColorLight'}`

  const getColorText = `${isLight ? 'text-designColorLight' : 'text-designColorDark'}`
  const getH1ColorText = `${isLight ? 'text-textColorDark' : 'text-gray-200'}`
  const getSubTitleColorText = `${isLight ? 'text-textColorDark' : 'text-textColor'}`
  const getNormalLightText = `${isLight ? 'text-textColorDark' : 'text-textColor'}`

  return {
    theme,
    isLight,
    getBGWithNormalText,
    getBGWithColorText,
    getColorText,
    getSubTitleColorText,
    getH1ColorText,
    getBG,
    getNormalLightText,
    getBGHoverText
  }
}
