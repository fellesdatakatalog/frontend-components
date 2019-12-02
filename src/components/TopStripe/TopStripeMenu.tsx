import React from 'react';
import ActionButton from 'components/ActionButton';
import { getClassNames } from './TopStripeMenu.classNames';
import { LinkProps } from '../Link';
import { TopStripeContext } from './TopStripe';
import classnames from 'classnames';
export interface TopStripeMenuProps extends LinkProps {
  defaultSelected?: number;
  onRender?: any;
  title: string;
  index?: number;
}

export const TopStripeMenu: React.FC<TopStripeMenuProps> = props => {
  const [selected, setSelected] = React.useState();
  const styles = getClassNames();
  const { children, onRender, title, index, ...rest } = props;
  const { open, setOpen } = React.useContext(TopStripeContext);
  return (
    <div {...rest}>
      <ActionButton
        className={styles.menuButton}
        onClick={() => setOpen(index)}
      >
        {title}
      </ActionButton>
      {open === index && (
        <ul className={styles.dropdownContainer}>
          {onRender
            ? onRender
            : React.Children.map(children, (child, index) => {
                if (!selected && child.props && child.props.defaultSelected) {
                  setSelected(index);
                }
                const isSelected = selected === index;
                if (React.isValidElement<LinkProps>(child)) {
                  return (
                    <li onClick={() => setSelected(index)}>
                      {React.cloneElement(child, {
                        icon: isSelected ? 'Check' : undefined
                      })}
                    </li>
                  );
                }
              })}
          <li>
            <ActionButton
              className={classnames(styles.menuButton, styles.menuButtonButtom)}
              icon={'ChevronUp'}
              onClick={() => setOpen(index)}
            />
          </li>
        </ul>
      )}
    </div>
  );
};
