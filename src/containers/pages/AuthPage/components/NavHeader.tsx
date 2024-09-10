import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useChangeLanguage } from '../../../../hooks/useChangeLanguage';
import { locales } from '../../../../i18n/i18n';
import ThemeToggle from '../../../../components/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';

const NavHeader = () => {
  const { changeLanguage , i18n } = useChangeLanguage();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const currentLanguage = locales[i18n.language as keyof typeof locales];
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage); 
  };

  return (
    <div className="w-100">
        <Nav className="justify-content-end align-items-center" activeKey="/home">
        <Nav.Item>
          <select 
            className={theme==='dark' ? "form-select bg-dark text-white" : "form-select bg-light text-dark"} 
            aria-label="Select language"
            onChange={handleLanguageChange} // Gắn sự kiện onChange
            value={i18n.language} // Đảm bảo select hiển thị đúng ngôn ngữ hiện tại
          >
            {/* Duyệt qua mảng locales để render ra các option */}
            {Object.keys(locales).map((key) => (
              <option key={key} value={key}>{locales[key as keyof typeof locales]}</option>
            ))}
          </select>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            {/* <DayMode/> */}
            <ThemeToggle/>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavHeader
