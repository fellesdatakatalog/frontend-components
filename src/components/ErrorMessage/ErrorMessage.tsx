import { css } from '@uifabric/utilities';
import * as React from 'react';
import { getClassNames } from './ErrorMessage.classNames';

interface ErrorMessageProps {
  children: JSX.Element | string;
  showError?: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  const errorClassNames = getClassNames();
  const showError = props.showError !== undefined ? props.showError : true;
  if (!showError) {
    return null;
  }
  return (
    <span role="alert" className={css(errorClassNames)}>
      {props.children}
    </span>
  );
};

export default ErrorMessage;
