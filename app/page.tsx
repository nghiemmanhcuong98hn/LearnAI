'use client'

import ThemeToggle from './components/ThemeToggle';
import { Button, Card, Space, Typography } from 'antd';

const { Title, Text } = Typography;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <Card className="w-full max-w-md shadow-lg">
        <Space orientation="vertical" size="large" className="w-full text-center">
          <div className="flex items-center justify-between">
            <Title level={2} className="m-0">
              Learn AI
            </Title>
            <ThemeToggle />
          </div>
          <Text type="secondary">
            Testing dark mode integration with Ant Design and Tailwind CSS v4.
          </Text>
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
          </Space>
          <div className="mt-4 rounded-lg bg-background p-4 text-foreground">
            Tailwind v4 dark: utility test (Blue background in Dark Mode)
          </div>
        </Space>
      </Card>
    </div>
  );
}
