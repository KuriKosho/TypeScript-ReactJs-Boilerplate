// src/hooks/useThemeClass.ts

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export const useThemeClass = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
};