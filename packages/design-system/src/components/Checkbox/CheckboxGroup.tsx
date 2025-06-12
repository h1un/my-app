'use client';

import * as React from 'react';
import { cn } from '../../utils';
import { Checkbox } from './Checkbox';

interface CheckboxGroupItemProps {
  label: string;
  value: string;
  description?: string;
  children?: React.ReactNode;
  level?: number;
}

interface CheckboxGroupProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  description?: string;
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

const CheckboxGroupContext = React.createContext<{
  value: string[];
  onValueChange?: (value: string[]) => void;
  parentValue?: string;
  level: number;
}>({
  value: [],
  level: 0,
});

const CheckboxGroupItem = React.forwardRef<HTMLDivElement, CheckboxGroupItemProps>(
  ({ label, value, description, children }, ref) => {
    const { value: groupValue, onValueChange, level } = React.useContext(CheckboxGroupContext);
    const hasChildren = React.Children.count(children) > 0;

    // 재귀적으로 모든 하위 값들을 수집하는 함수
    const getAllDescendantValues = React.useMemo(() => {
      const collectValues = (children: React.ReactNode): string[] => {
        const values: string[] = [];
        React.Children.forEach(children, child => {
          if (React.isValidElement(child) && child.props.value) {
            values.push(child.props.value);
            if (child.props.children) {
              values.push(...collectValues(child.props.children));
            }
          }
        });
        return values;
      };
      return collectValues(children);
    }, [children]);

    const isChecked = hasChildren
      ? getAllDescendantValues.every(v => groupValue.includes(v))
      : groupValue.includes(value);
    const isIndeterminate =
      hasChildren &&
      getAllDescendantValues.some(v => groupValue.includes(v)) &&
      !getAllDescendantValues.every(v => groupValue.includes(v));

    const handleChange = (checked: boolean) => {
      if (!onValueChange) return;

      if (hasChildren) {
        if (checked) {
          // 자신과 모든 하위 체크박스들을 체크
          const newValues = [...new Set([...groupValue, value, ...getAllDescendantValues])];
          onValueChange(newValues);
        } else {
          // 자신과 모든 하위 체크박스들을 해제
          onValueChange(groupValue.filter(v => v !== value && !getAllDescendantValues.includes(v)));
        }
      } else {
        if (checked) {
          onValueChange([...groupValue, value]);
        } else {
          onValueChange(groupValue.filter(v => v !== value));
        }
      }
    };

    return (
      <div ref={ref}>
        <div>
          <Checkbox
            id={value}
            checked={isIndeterminate ? 'indeterminate' : isChecked}
            onCheckedChange={handleChange}
            label={label}
            description={description}
          />
          {children && (
            <div className="relative mt-1">
              <div className="absolute left-[7px] top-0 bottom-3 w-px bg-border" />
              <div className="ml-[28px] space-y-1">
                <CheckboxGroupContext.Provider
                  value={{
                    value: groupValue,
                    onValueChange,
                    parentValue: value,
                    level: level + 1,
                  }}
                >
                  {children}
                </CheckboxGroupContext.Provider>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);
CheckboxGroupItem.displayName = 'CheckboxGroupItem';

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ children, className, label, description, value = [], onValueChange, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-1', className)} {...props}>
        {label && (
          <div className="space-y-1">
            <label className="text-sm font-medium leading-none">{label}</label>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
        )}
        <CheckboxGroupContext.Provider value={{ value, onValueChange, level: 0 }}>
          <div className="space-y-1">{children}</div>
        </CheckboxGroupContext.Provider>
      </div>
    );
  }
);
CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup, CheckboxGroupItem };
export type { CheckboxGroupProps, CheckboxGroupItemProps };
