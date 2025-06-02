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
      options: ['solid', 'outline', 'outlineSoft', 'outlineMuted', 'soft', 'link'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'solid' },
        type: { summary: 'string' },
      },
    },
    intent: {
      description: '버튼의 의미적 역할을 결정합니다',
      options: ['primary', 'secondary', 'danger', 'warning'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    size: {
      description: '버튼의 크기를 결정합니다',
      options: ['md', 'sm', 'lg'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
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
    variant: 'solid',
    intent: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '가장 기본적인 형태의 버튼입니다. 주요 행동을 나타낼 때 사용합니다.',
      },
    },
  },
};

// 모든 조합 보기
export const AllCombinations: Story = {
  render: () => (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Solid Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid" intent="primary">Primary</Button>
            <Button variant="solid" intent="secondary">Secondary</Button>
            <Button variant="solid" intent="danger">Danger</Button>
            <Button variant="solid" intent="warning">Warning</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Outline Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" intent="primary">Primary</Button>
            <Button variant="outline" intent="secondary">Secondary</Button>
            <Button variant="outline" intent="danger">Danger</Button>
            <Button variant="outline" intent="warning">Warning</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Outline Soft Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" intent="primary">Primary</Button>
            <Button variant="outline" intent="secondary">Secondary</Button>
            <Button variant="outline" intent="danger">Danger</Button>
            <Button variant="outline" intent="warning">Warning</Button>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Outline Mute Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outlineMuted" intent="primary">Primary</Button>
            <Button variant="outlineMuted" intent="secondary">Secondary</Button>
            <Button variant="outlineMuted" intent="danger">Danger</Button>
            <Button variant="outlineMuted" intent="warning">Warning</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Soft Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="soft" intent="primary">Primary</Button>
            <Button variant="soft" intent="secondary">Secondary</Button>
            <Button variant="soft" intent="danger">Danger</Button>
            <Button variant="soft" intent="warning">Warning</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Link Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="link" intent="primary">Primary</Button>
            <Button variant="link" intent="secondary">Secondary</Button>
            <Button variant="link" intent="danger">Danger</Button>
            <Button variant="link" intent="warning">Warning</Button>
          </div>
        </div>
      </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant와 intent의 조합을 한눈에 비교할 수 있습니다.',
      },
    },
  },
};
