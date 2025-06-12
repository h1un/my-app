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
        component:
          '버튼 컴포넌트는 사용자의 행동을 유도하는 인터랙티브 요소입니다. 다양한 스타일과 크기를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '버튼의 시각적 형태를 결정합니다',
      options: ['solid', 'outline', 'text', 'link'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'filled' },
        type: { summary: 'string' },
      },
    },
    intent: {
      description: '버튼의 의미적 역할을 결정합니다',
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    tone: {
      description: '버튼의 색상 강도를 결정합니다',
      options: ['filled', 'soft'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'filled' },
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
    tone: 'filled',
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
        <h3 className="mb-4 text-lg font-semibold">Filled Variants</h3>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-gray-600">filled</h4>{' '}
          <div className="flex flex-wrap gap-4">
            <Button variant="solid" intent="primary" tone="filled">
              Primary
            </Button>
            <Button variant="solid" intent="secondary" tone="filled">
              Secondary
            </Button>
            <Button variant="solid" intent="success" tone="filled">
              Success
            </Button>
            <Button variant="solid" intent="danger" tone="filled">
              Danger
            </Button>
            <Button variant="solid" intent="warning" tone="filled">
              Warning
            </Button>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-medium text-gray-600">Soft</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid" intent="primary" tone="soft">
              Primary
            </Button>
            <Button variant="solid" intent="secondary" tone="soft">
              Secondary
            </Button>
            <Button variant="solid" intent="success" tone="soft">
              Success
            </Button>
            <Button variant="solid" intent="danger" tone="soft">
              Danger
            </Button>
            <Button variant="solid" intent="warning" tone="soft">
              Warning
            </Button>
          </div>{' '}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Outline Variants</h3>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-gray-600">filled</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" intent="primary" tone="filled">
              Primary
            </Button>
            <Button variant="outline" intent="secondary" tone="filled">
              Secondary
            </Button>
            <Button variant="outline" intent="success" tone="filled">
              Success
            </Button>
            <Button variant="outline" intent="danger" tone="filled">
              Danger
            </Button>
            <Button variant="outline" intent="warning" tone="filled">
              Warning
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-gray-600">Soft</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" intent="primary" tone="soft">
              Primary
            </Button>
            <Button variant="outline" intent="secondary" tone="soft">
              Secondary
            </Button>
            <Button variant="outline" intent="success" tone="soft">
              Success
            </Button>
            <Button variant="outline" intent="danger" tone="soft">
              Danger
            </Button>
            <Button variant="outline" intent="warning" tone="soft">
              Warning
            </Button>
          </div>{' '}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Text Variants</h3>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-gray-600">Filled</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="text" intent="primary" tone="filled">
              Primary
            </Button>
            <Button variant="text" intent="secondary" tone="filled">
              Secondary
            </Button>
            <Button variant="text" intent="success" tone="filled">
              Success
            </Button>
            <Button variant="text" intent="danger" tone="filled">
              Danger
            </Button>
            <Button variant="text" intent="warning" tone="filled">
              Warning
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-medium text-gray-600">Soft</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="text" intent="primary" tone="soft">
              Primary
            </Button>
            <Button variant="text" intent="secondary" tone="soft">
              Secondary
            </Button>
            <Button variant="text" intent="success" tone="soft">
              Success
            </Button>
            <Button variant="text" intent="danger" tone="soft">
              Danger
            </Button>
            <Button variant="text" intent="warning" tone="soft">
              Warning
            </Button>
          </div>{' '}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Link Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="link" intent="primary">
            Primary
          </Button>
          <Button variant="link" intent="secondary">
            Secondary
          </Button>
          <Button variant="link" intent="success">
            Success
          </Button>
          <Button variant="link" intent="danger">
            Danger
          </Button>{' '}
          <Button variant="link" intent="warning">
            Warning
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant, intent, tone의 조합을 한눈에 비교할 수 있습니다.',
      },
    },
  },
};
