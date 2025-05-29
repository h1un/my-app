import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '버튼 컴포넌트는 사용자의 행동을 유도하는 인터랙티브 요소입니다. 다양한 스타일과 크기를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '버튼의 시각적 스타일을 결정합니다',
      options: ['default', 'dark', 'destructive', 'secondary', 'outline', 'outlineHoverFill', 'outlineDark', 'outlineMute', 'ghost', 'hover', 'link'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
    size: {
      description: '버튼의 크기를 결정합니다',
      options: ['default', 'sm', 'lg'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: '버튼의 비활성화 상태를 결정합니다',
      control: 'boolean',
      table: {
        defaultValue: { summary: undefined },
        type: { summary: 'boolean' },
      },
    },
    children: {
      description: '버튼 내부에 표시될 콘텐츠',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: '기본 버튼',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: '가장 기본적인 형태의 버튼입니다. 주요 행동을 나타낼 때 사용합니다.',
      },
    },
  },
};

// 모든 Variants 보기
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline">Outline</Button>
        <Button variant="outlineHoverFill">OutlineHoverFill</Button>
        <Button variant="outlineDark">OutlineDark</Button>
        <Button variant="outlineMute">OutlineMute</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="ghost">Ghost</Button>
        <Button variant="hover">Hover</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant를 한눈에 비교할 수 있습니다.',
      },
    },
  },
};

// 모든 크기 보기
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 모든 크기를 한눈에 비교할 수 있습니다.',
      },
    },
  },
};

// 상태별 버튼
export const States: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 다양한 상태를 보여줍니다.',
      },
    },
  },
};
