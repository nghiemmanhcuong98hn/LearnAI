'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button shape="circle" icon={<Sun size={18} />} disabled />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      type="text"
      shape="circle"
      onClick={toggleTheme}
      icon={resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      className="flex items-center justify-center"
    />
  );
}
