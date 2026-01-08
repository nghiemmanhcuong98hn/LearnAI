'use client';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const AntdThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider
      theme={{
        algorithm:
          resolvedTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <AntdThemeProvider>{children}</AntdThemeProvider>
    </NextThemesProvider>
  );
}
