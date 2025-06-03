import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outline', 'solid', 'ghost', 'underline'],
      control: 'radio',
      description: '입력 필드의 스타일 변형',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'radio',
      description: '입력 필드의 크기',
    },
    type: {
      options: ['text', 'password', 'email', 'search', 'date', 'file'],
      control: 'select',
      description: '입력 필드의 HTML 타입',
    },
    state: {
      options: ['default', 'error', 'success'],
      control: 'radio',
      description: '입력 필드의 상태',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: '라벨',
    placeholder: '플레이스홀더를 입력해주세요.',
    state: 'default',
  },
};

export const WithStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        label="Default"
        placeholder="Enter text"
        message="This is a help message"
        state="default"
      />
      <Input
        label="Success"
        placeholder="Enter text"
        state="success"
        message="This is a success message"
      />
      <Input
        label="Error"
        placeholder="Enter text"
        state="error"
        message="This is an error message"
      />
    </div>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input variant="outline" label="Default" placeholder="Default variant" />
      <Input variant="solid" label="Solid" placeholder="Solid variant" />
      <Input variant="ghost" label="Ghost" placeholder="Ghost variant" />
      <Input variant="underline" label="Underline" placeholder="Underline variant" />
    </div>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="sm" label="Small" placeholder="Small size" />
      <Input size="md" label="Medium" placeholder="Medium size" />
      <Input size="lg" label="Large" placeholder="Large size" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'This input is disabled',
    disabled: true,
    message: 'This field is currently disabled',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search...',
  },
};

export const FileInput: Story = {
  args: {
    type: 'file',
    label: '파일 업로드',
    accept: 'image/*',
    message: '이미지 파일을 선택해주세요',
  },
};
