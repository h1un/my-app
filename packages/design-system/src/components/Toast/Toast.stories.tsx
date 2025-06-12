import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { Toast } from './Toast';
import { Button } from '../Button/Button';
import { ToastProvider, useToast } from './useToast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Toast는 사용자에게 일시적인 피드백이나 알림을 표시하는 컴포넌트입니다.`,
      },
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    variant: {
      description: '토스트의 시각적 스타일을 결정합니다',
      options: ['solid', 'outline'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'solid' },
        type: { summary: 'string' },
      },
    },
    intent: {
      description: '토스트의 의미적 역할을 결정합니다',
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    title: {
      description: '토스트의 제목',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      description: '토스트의 상세 내용',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    duration: {
      description:
        '토스트가 자동으로 사라지는 시간(밀리초). onDismiss와 함께 사용될 때만 동작합니다.',
      control: 'number',
      table: {
        defaultValue: { summary: '5000' },
        type: { summary: 'number' },
      },
    },
    onDismiss: {
      description: '토스트를 닫을 때 호출되는 함수. X 버튼이 표시되고 자동 닫힘이 활성화됩니다.',
      table: {
        type: { summary: '(id: string) => void' },
      },
    },
  },
  decorators: [
    Story => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

/**
 * 정적인 토스트 예시들입니다.
 * 실제 사용시에는 ToastProvider와 useToast hook을 통해 동적으로 생성됩니다.
 */
export const StaticPrimary: StoryFn<typeof Toast> = args => <Toast {...args} id="static-1" />;

StaticPrimary.args = {
  title: '기본 토스트',
  description: '기본적인 solid 스타일의 primary 토스트입니다.',
  variant: 'solid',
  intent: 'primary',
};

StaticPrimary.storyName = 'Default';

export const All: StoryFn<typeof Toast> = args => {
  return (
    <div className="flex flex-col gap-4 [&>div]:p-4 [&>div]:bg-gray-50 [&>div]:rounded-md">
      <div className="flex flex-row gap-2">
        <Toast
          {...args}
          id="static-1"
          title="Primary 토스트"
          description="solid 스타일의 primary 토스트입니다."
          variant="solid"
          intent="primary"
        />
        <Toast
          {...args}
          id="static-2"
          title="Primary 토스트"
          description="outline 스타일의 primary 토스트입니다."
          variant="outline"
          intent="primary"
        />
      </div>{' '}
      <div className="flex flex-row gap-2">
        <Toast
          {...args}
          id="static-3"
          title="Secondary 토스트"
          description="solid 스타일의 secondary 토스트입니다."
          variant="solid"
          intent="secondary"
        />
        <Toast
          {...args}
          id="static-4"
          title="Secondary 토스트"
          description="outline 스타일의 secondary 토스트입니다."
          variant="outline"
          intent="secondary"
        />
      </div>
      <div className="flex flex-row gap-2">
        <Toast
          id="static-5"
          title="Success 토스트"
          description="solid 스타일의 success 토스트입니다."
          variant="solid"
          intent="success"
        />
        <Toast
          id="static-6"
          title="Success 토스트"
          description="outline 스타일의 success 토스트입니다."
          variant="outline"
          intent="success"
        />
      </div>
      <div className="flex flex-row gap-2">
        <Toast
          id="static-7"
          title="Danger 토스트"
          description="solid 스타일의 danger 토스트입니다."
          variant="solid"
          intent="danger"
        />
        <Toast
          id="static-8"
          title="Danger 토스트"
          description="outline 스타일의 danger 토스트입니다."
          variant="outline"
          intent="danger"
        />
      </div>
      <div className="flex flex-row gap-2">
        <Toast
          id="static-9"
          title="Warning 토스트"
          description="solid 스타일의 warning 토스트입니다."
          variant="solid"
          intent="warning"
        />
        <Toast
          id="static-10"
          title="Warning 토스트"
          description="outline 스타일의 warning 토스트입니다."
          variant="outline"
          intent="warning"
        />
      </div>
    </div>
  );
};

All.storyName = 'All Combinations';
All.parameters = {
  docs: {
    description: {
      story: '토스트의 모든 스타일 변형을 보여주는 예시입니다.',
    },
  },
};

/**
 * 인터랙티브 예시들
 */
const SimpleToast = () => {
  const { addToast } = useToast();

  return (
    <Button
      onClick={() => {
        addToast({
          title: '알림',
          description: '기본적인 토스트 알림입니다.',
          intent: 'primary',
          variant: 'solid',
          duration: 5000,
        });
      }}
    >
      기본 토스트 표시
    </Button>
  );
};

export const Interactive: StoryFn<typeof Toast> = () => <SimpleToast />;

Interactive.storyName = '인터랙티브 예시';
Interactive.parameters = {
  docs: {
    description: {
      story: '버튼을 클릭하면 실제로 토스트가 표시되는 인터랙티브한 예시입니다.',
    },
  },
};

const IntentToasts = () => {
  const { addToast } = useToast();
  const showToast = (intent: 'primary' | 'secondary' | 'success' | 'danger' | 'warning') => {
    const messages = {
      primary: { title: '성공', description: '작업이 완료되었습니다.' },
      secondary: { title: '안내', description: '추가 정보가 있습니다.' },
      success: { title: '완료', description: '성공적으로 저장되었습니다.' },
      warning: { title: '주의', description: '잠재적인 문제가 있습니다.' },
      danger: { title: '오류', description: '작업을 완료할 수 없습니다.' },
    };

    addToast({
      ...messages[intent],
      intent,
      variant: 'solid',
      duration: 5000,
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <Button variant="solid" intent="primary" onClick={() => showToast('primary')}>
        성공 토스트
      </Button>
      <Button variant="solid" intent="secondary" onClick={() => showToast('secondary')}>
        안내 토스트
      </Button>
      <Button variant="solid" intent="success" onClick={() => showToast('success')}>
        완료 토스트
      </Button>
      <Button variant="solid" intent="warning" onClick={() => showToast('warning')}>
        주의 토스트
      </Button>
      <Button variant="solid" intent="danger" onClick={() => showToast('danger')}>
        오류 토스트
      </Button>
    </div>
  );
};

export const MultipleIntents: StoryFn<typeof Toast> = () => <IntentToasts />;

MultipleIntents.storyName = '다양한 의도(Intent)';
MultipleIntents.parameters = {
  docs: {
    description: {
      story: '4가지 다른 의도(primary, secondary, warning, danger)의 토스트를 표시하는 예시입니다.',
    },
  },
};
