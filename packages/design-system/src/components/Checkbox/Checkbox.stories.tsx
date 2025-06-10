import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxGroup, CheckboxGroupItem } from './CheckboxGroup';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: '이용약관에 동의합니다',
  },
};

export const WithDescription: Story = {
  args: {
    label: '뉴스레터 구독',
    description: '최신 소식을 이메일로 받아보세요',
  },
};

export const WithIntent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Primary Checkbox" intent="primary" />
      <Checkbox label="Secondary Checkbox" intent="secondary" />
      <Checkbox label="Danger Checkbox" intent="danger" />
      <Checkbox label="Warning Checkbox" intent="warning" />
    </div>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Small Checkbox" size="sm" />
      <Checkbox label="Medium Checkbox" size="md" />
      <Checkbox label="Large Checkbox" size="lg" />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    label: '중간 상태 체크박스',
    checked: 'indeterminate',
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 체크박스',
    disabled: true,
  },
};

export const HierarchicalCheckboxes: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);

    return (
      <CheckboxGroup
        label="카테고리 선택"
        description="원하는 카테고리를 선택해주세요"
        value={value}
        onValueChange={setValue}
      >
        <CheckboxGroupItem value="fruits" label="과일">
          <CheckboxGroupItem value="apple" label="사과" />
          <CheckboxGroupItem value="banana" label="바나나" />
          <CheckboxGroupItem value="orange" label="오렌지" />
        </CheckboxGroupItem>
        <CheckboxGroupItem value="vegetables" label="채소">
          <CheckboxGroupItem value="carrot" label="당근" />
          <CheckboxGroupItem value="lettuce" label="상추" />
          <CheckboxGroupItem value="potato" label="감자" />
        </CheckboxGroupItem>
      </CheckboxGroup>
    );
  },
};

export const DeepNestedCheckboxes: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);

    return (
      <CheckboxGroup
        label="조직도"
        description="부서와 팀을 선택해주세요"
        value={value}
        onValueChange={setValue}
      >
        <CheckboxGroupItem value="development" label="개발본부">
          <CheckboxGroupItem value="frontend" label="프론트엔드팀">
            <CheckboxGroupItem value="react" label="리액트 파트" />
            <CheckboxGroupItem value="vue" label="뷰 파트" />
          </CheckboxGroupItem>
          <CheckboxGroupItem value="backend" label="백엔드팀">
            <CheckboxGroupItem value="java" label="자바 파트" />
            <CheckboxGroupItem value="python" label="파이썬 파트" />
          </CheckboxGroupItem>
        </CheckboxGroupItem>
        <CheckboxGroupItem value="design" label="디자인본부">
          <CheckboxGroupItem value="ux" label="UX팀" />
          <CheckboxGroupItem value="ui" label="UI팀" />
        </CheckboxGroupItem>
      </CheckboxGroup>
    );
  },
};
