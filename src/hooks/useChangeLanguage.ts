import { useTranslation } from 'react-i18next';
export const useChangeLanguage = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return { changeLanguage, i18n };
}