import * as React from 'react';
import Grid from '../Grid/Grid';
import { getClassNames } from './Accordion.classNames';
import { AccordionItemProps } from './AccordionItem/AccordionItem';

interface AccordionProps {
  /** Benyttes når man skal ta brukeren gjennom en sekvens av trinnvise steg. */
  children?: React.ReactNode;
  processList?: boolean;
  stepId?: string;
}

/**
 * @visibleName Accordion (Ekspanderende panel)
 */
export default class Accordion extends React.PureComponent<AccordionProps, {}> {
  render() {
    const { processList, stepId, children } = this.props;
    // @ts-ignore TODO
    const { accordion } = getClassNames();
    const totalSteps = React.Children.count(children);
    return (
      <div className={accordion}>
        <Grid>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement<AccordionItemProps>(child))
              return React.cloneElement(child, {
                stepNumber: index + 1,
                id: stepId && stepId + index + 1,
                totalSteps,
                processList
              });
          })}
        </Grid>
      </div>
    );
  }
}
