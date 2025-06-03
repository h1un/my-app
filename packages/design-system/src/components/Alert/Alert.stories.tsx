import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import { Alert } from './Alert';
import { Button } from '../Button/Button';
import { AlertProvider, useAlert } from './useAlert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '알럿은 사용자에게 중요한 정보를 표시하거나 액션을 요청하는 모달 컴포넌트입니다.',
      },
      story: {
        height: '600px',
      },
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    intent: {
      description: '알럿의 의미적 역할을 결정합니다',
      options: ['primary', 'secondary', 'danger', 'warning'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    size: {
      description: '알럿의 크기를 결정합니다',
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
  },
  decorators: [
    Story => (
      <AlertProvider>
        <Story />
      </AlertProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: '알럿 제목',
    description: '알럿 설명입니다.',
    open: true,
  },
  parameters: {
    docs: {
      canvas: {
        width: '100%',
        height: '500px',
      },
    },
  },
};

const AlertDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>알럿 열기</Button>
      <Alert
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        title="기본 알럿"
        description="알럿 내용을 입력하세요."
      />
    </>
  );
};

export const WithButton: Story = {
  render: () => <AlertDemo />,
};

const AlertWithHook = () => {
  const { openAlert } = useAlert();

  const showAlert = (intent: 'primary' | 'secondary' | 'danger' | 'warning') => {
    const messages = {
      primary: { title: '확인', description: '작업을 완료하시겠습니까?' },
      secondary: { title: '안내', description: '추가 정보가 있습니다.' },
      warning: { title: '주의', description: '변경사항이 저장되지 않았습니다.' },
      danger: { title: '삭제', description: '정말 삭제하시겠습니까?' },
    };

    openAlert({
      ...messages[intent],
      intent,
      onConfirm: () => console.log('확인'),
      onCancel: () => console.log('취소'),
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button variant="solid" intent="primary" onClick={() => showAlert('primary')}>
        기본 알럿
      </Button>
      <Button variant="solid" intent="secondary" onClick={() => showAlert('secondary')}>
        정보 알럿
      </Button>
      <Button variant="solid" intent="warning" onClick={() => showAlert('warning')}>
        경고 알럿
      </Button>
      <Button variant="solid" intent="danger" onClick={() => showAlert('danger')}>
        삭제 알럿
      </Button>
    </div>
  );
};

export const WithHook: Story = {
  render: () => <AlertWithHook />,
  parameters: {
    docs: {
      description: {
        story: 'useAlert 훅을 사용하면 더 쉽게 알럿을 표시할 수 있습니다.',
      },
      canvas: {
        width: '100%',
        height: '500px',
      },
    },
  },
};
