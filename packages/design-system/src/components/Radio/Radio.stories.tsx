import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { RadioGroup, RadioGroupItem } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '라디오 그룹의 비활성화 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1" label="옵션 1" />
      <RadioGroupItem value="option-2" label="옵션 2" />
      <RadioGroupItem value="option-3" label="옵션 3" />
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1" label="옵션 1" description="첫 번째 옵션에 대한 설명" />
      <RadioGroupItem value="option-2" label="옵션 2" description="두 번째 옵션에 대한 설명" />
      <RadioGroupItem value="option-3" label="옵션 3" description="세 번째 옵션에 대한 설명" />
    </RadioGroup>
  ),
};

export const WithIntent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="primary">
        <RadioGroupItem value="primary" label="Primary" intent="primary" />
      </RadioGroup>
      <RadioGroup defaultValue="secondary">
        <RadioGroupItem value="secondary" label="Secondary" intent="secondary" />
      </RadioGroup>
      <RadioGroup defaultValue="danger">
        <RadioGroupItem value="danger" label="Danger" intent="danger" />
      </RadioGroup>
      <RadioGroup defaultValue="warning">
        <RadioGroupItem value="warning" label="Warning" intent="warning" />
      </RadioGroup>
    </div>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="sm">
        <RadioGroupItem value="sm" label="Small" size="sm" />
      </RadioGroup>
      <RadioGroup defaultValue="md">
        <RadioGroupItem value="md" label="Medium" size="md" />
      </RadioGroup>
      <RadioGroup defaultValue="lg">
        <RadioGroupItem value="lg" label="Large" size="lg" />
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup disabled defaultValue="option-1">
      <RadioGroupItem value="option-1" label="옵션 1 (비활성화)" />
      <RadioGroupItem value="option-2" label="옵션 2 (비활성화)" />
      <RadioGroupItem value="option-3" label="옵션 3 (비활성화)" />
    </RadioGroup>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1" label="활성화된 옵션" />
      <RadioGroupItem value="option-2" label="비활성화된 옵션" disabled />
      <RadioGroupItem value="option-3" label="활성화된 옵션" />
    </RadioGroup>
  ),
};
