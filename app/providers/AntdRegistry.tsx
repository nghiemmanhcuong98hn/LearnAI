'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

export default function AntdRegistry({ children }: { children: React.ReactNode }) {
  const cache = createCache();

  useServerInsertedHTML(() => {
    const css = extractStyle(cache, true);
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{
          __html: css.replace(/<\/?script/gi, ""),
        }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}
