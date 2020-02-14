import classnames from 'classnames';
import {
  ISearchBoxProps,
  SearchBox
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import * as React from 'react';
import { getClassNames } from './SearchField.classNames';
import { IDropdownOption } from 'office-ui-fabric-react';
import ActionButton from '../ActionButton';
import LabelWithCallout, {
  calloutState,
  LabelWithCalloutProps
} from '../LabelWithCallout';

export interface SearchFieldProps extends ISearchBoxProps {
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
  /** Hjelpetekst */
  help?: string;
  /** Descriptive label for SearchField */
  label?: string;
  /** Overstyr label, se LabelWithCallout komponent */
  labelCallout?: LabelWithCalloutProps;
  /** Brukerspesifisert event for callout **/
  onCalloutToggle?: (
    oldCalloutState: calloutState,
    newCalloutState: calloutState
  ) => void;
  /** Liste med mulige søkeresultat fra søk */
  options?: Array<IDropdownOption>;
  /** Størrelsen på søkefeltet */
  searchFieldSize?: 'standard' | 'large';
  /** @ignore */
  underlined?: ISearchBoxProps['underlined'];
}

const searchInList = (options: Array<IDropdownOption>, filterText: string) => {
  return options
    .filter(option => {
      return (
        option.text
          .replace(/\s/g, '')
          .toLowerCase()
          .indexOf(filterText.replace(/\s/g, '').toLowerCase()) > -1
      );
    })
    .map(option => option);
};

/**
 * @visibleName SearchField (Søkefelt)
 */
const SearchField: React.FC<SearchFieldProps> = props => {
  const {
    className,
    help,
    id,
    label,
    labelCallout,
    onCalloutToggle,
    onChange,
    options,
    ...rest
  } = props;
  const _searchBoxElement = React.createRef<HTMLDivElement>();
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const [searchResultList, setSearchResultList] = React.useState(options);
  const [value, setValue] = React.useState<string | undefined>(props.value);
  const [focus, setFocus] = React.useState<number>(-1);
  const styles = getClassNames(props);
  const listRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  React.useEffect(() => {
    setSearchResultList(options);
    setSearchResult(value ? value : '');
  }, [options]);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const changeEvent = (text: string) => {
    //@ts-ignore TODO
    const event: React.ChangeEvent<HTMLInputElement> = {};
    setValue(text);
    onChange && onChange(event, text);
    setDropdownVisible(false);
    setFocus(-1);
    listRefs.current = [];
  };

  const handleOnKeyDown = (ev: React.KeyboardEvent<HTMLElement>) => {
    if (dropdownVisible && listRefs.current) {
      let newFocus = focus;
      if (ev.keyCode === 38) {
        newFocus--;
      } else if (ev.keyCode === 40) {
        newFocus++;
      }
      if (newFocus <= listRefs.current.length - 1) {
        const focusItem = listRefs.current[newFocus];
        focusItem && focusItem.focus();
        setFocus(newFocus);
      }
    }
  };

  const setSearchResult = (newValue: string) => {
    if (options && newValue) {
      const newList = searchInList(options, newValue);
      setSearchResultList(newList);
      setDropdownVisible(newList.length > 0);
    }
  };

  const renderSuggestions = list => {
    if (list.length === 0) {
      setDropdownVisible(false);
      listRefs.current = [];
    }
    return (
      <div className={styles.searchListDropdown}>
        <ul className={styles.searchList}>
          {list.map((listItem, key: number) => {
            return (
              <li
                aria-label={listItem.text}
                key={listItem.key}
                onClick={() => changeEvent(listItem.text)}
                onKeyPress={ev => {
                  if (ev.keyCode === 0) {
                    changeEvent(listItem.text);
                  }
                }}
                onKeyDown={ev => handleOnKeyDown(ev)}
                ref={(ref: HTMLLIElement | null) => {
                  if (ref && listRefs.current.indexOf(ref) === -1) {
                    listRefs.current.splice(key, 0, ref);
                  }
                }}
                tabIndex={0}
              >
                <ActionButton
                  ariaLabel={listItem.text}
                  className={styles.blackAlt}
                  title={listItem.text}
                  tabIndex={-1}
                >
                  {listItem.text}
                </ActionButton>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <>
      <LabelWithCallout
        id={id}
        label={label}
        help={help}
        onCalloutToggle={onCalloutToggle}
        {...labelCallout}
      />
      {options ? (
        <div ref={_searchBoxElement}>
          <SearchBox
            {...rest}
            className={classnames(styles.main, className)}
            onChange={(ev, newValue) => {
              if (!newValue) {
                setDropdownVisible(false);
              } else {
                setSearchResult(newValue);
              }
              setValue(newValue);
              onChange && onChange(ev, newValue);
            }}
            onKeyDown={ev => handleOnKeyDown(ev)}
            value={value}
          />
          {dropdownVisible && renderSuggestions(searchResultList)}
        </div>
      ) : (
        <SearchBox {...rest} className={classnames(styles.main, className)} />
      )}
    </>
  );
};

SearchField.defaultProps = {
  border: 'default',
  searchFieldSize: 'standard'
};

export default SearchField;
