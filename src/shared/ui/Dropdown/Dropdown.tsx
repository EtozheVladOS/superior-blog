import { ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdowmDirection } from '@/shared/types/ui';
import { AppLink } from '../AppLink';
import cl from './Dropdown.module.scss';

const mapDropdowmDirection: Record<DropdowmDirection, string> = {
  'top-right': cl.optionTopRight,
  'top-left': cl.optionTopLeft,
  'bottom-right': cl.optionBottomRight,
  'bottom-left': cl.optionBottomLeft,
};

export type DropdownItem = {
  contnent: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

export type DropdownProps = {
  items: DropdownItem[];
  trigger: ReactNode;
  dropdowmDirection?: DropdowmDirection;
  className?: string;
};

export const Dropdown = ({
  items,
  trigger,
  dropdowmDirection = 'bottom-right',
  className,
}: DropdownProps) => {
  return (
    <Menu as="div" className={classNames(cl.container, {}, [className])}>
      <Menu.Button className={cl.trigger}>{trigger}</Menu.Button>

      <Menu.Items className={classNames(cl.menu, {}, [mapDropdowmDirection[dropdowmDirection]])}>
        {items.map((item, idx) => {
          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                className={cl.menuItem}
                key={item.href}
              >
                {({ active }) => (
                  <button
                    onClick={item.onClick}
                    disabled={item.disabled}
                    className={classNames(cl.menuBtn, { [cl.activeItem]: active })}
                    type="button"
                  >
                    {item.contnent}
                  </button>
                )}
              </Menu.Item>
            );
          }

          const key = typeof item.contnent === 'string' ? item.contnent : idx;

          return (
            <Menu.Item as="div" className={cl.menuItem} key={key}>
              {({ active }) => (
                <button
                  onClick={item.onClick}
                  disabled={item.disabled}
                  className={classNames(cl.menuBtn, { [cl.activeItem]: active })}
                  type="button"
                >
                  {item.contnent}
                </button>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
