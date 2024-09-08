import { ImageSourcePropType } from "react-native"

export type Language = {
    id: number,
    code: string,
    name: string,
    ename: string,
    icon_url: ImageSourcePropType,
}

export const AppLanguage: Language[] = [
    {
        id: 1, 
        code: 'vi',
        name: 'Tiếng việt',
        ename: 'Vietnamese',
        icon_url: require('../assets/icons/language_flag/vi.png'),
    },
    {
        id: 2, 
        code: 'en',
        name: 'English',
        ename: 'English',
        icon_url: require('../assets/icons/language_flag/vi.png'),
    }
]
