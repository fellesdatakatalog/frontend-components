import classnames from 'classnames';
import {
  ISearchBoxProps,
  ISearchBox,
  SearchBox
} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import * as React from 'react';
import { getClassNames } from './SearchField.classNames';
import { IDropdownOption } from 'office-ui-fabric-react';
import LabelWithCallout, {
  calloutState,
  LabelWithCalloutProps
} from '../LabelWithCallout';
import { useId } from '@reach/auto-id';
import { useHotkeys } from '../utils/useHotkeys';

export interface SearchFieldProps extends ISearchBoxProps {
  /** Lukk callout på blur */
  labelWithCalloutAutoDismiss?: boolean;
  /** Størrelsen på rammen */
  border?: 'default' | 'slim';
  /** Hjelpetekst */
  help?: string | JSX.Element;
  /** Descriptive label for SearchField */
  label?: string;
  /** aria-label for knapp i label */
  labelButtonAriaLabel?: string;
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
  /**påkalt etter bruker valger et alternativ*/
  onSelected?: (option: IDropdownOption) => void;
  /** Begrens antall viste søkeresultat */
  limit?: number;
  /** Tillater tastatursnarvei på søk */
  keyboardShortcut?: boolean;
  /** Hvilke taster som fungerer for snarvei */
  searchShortcutKeys?: 'string';
  /** Gjør søkeikonet klikkbart, trenger samme kode som onSearch */
  onSearchIcon?: (newValue: any) => void;
  /** Legg til egen mouseover tittel på søkeikonet */
  searchIconTitle?: 'string';
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

const limitNumberOfResults = (list: Array<IDropdownOption>, limit?: number) => {
  if (limit && !isNaN(limit)) {
    return list.slice(0, limit);
  }

  return list;
};

/**
 * @visibleName SearchField (Søkefelt)
 */
const SearchField: React.FC<SearchFieldProps> = props => {
  const {
    className,
    labelWithCalloutAutoDismiss,
    help,
    id,
    label,
    labelButtonAriaLabel,
    labelCallout,
    onCalloutToggle,
    onChange,
    onSelected,
    options,
    limit,
    keyboardShortcut = false,
    searchShortcutKeys = 'ctrl+f',
    onSearchIcon,
    searchIconTitle = 'Søk',
    ...rest
  } = props;
  const _searchBoxElement = React.createRef<HTMLDivElement>();
  const _componentRef = React.useRef<ISearchBox>(null);
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const [searchResultList, setSearchResultList] = React.useState(options);
  const [value, setValue] = React.useState<string | undefined>(props.value);
  const [focus, setFocus] = React.useState<number>(-1);
  const styles = getClassNames(props);
  const listRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  React.useEffect(() => {
    setSearchResultList(options);
    setSearchResult(value ? value : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useHotkeys(searchShortcutKeys, ev => {
    if (keyboardShortcut) {
      ev.preventDefault();
      return _componentRef.current?.focus();
    }
  });

  const changeEvent = (text: string) => {
    //@ts-ignore TODO
    const event: React.ChangeEvent<HTMLInputElement> = {};
    setValue(text);
    onChange && onChange(event, text);
    setDropdownVisible(false);
    setFocus(-1);
    listRefs.current = [];
  };

  const selectEvent = (item: IDropdownOption) => {
    setValue(item.text);
    onSelected && onSelected(item);
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
      } else if (ev.keyCode === 27) {
        setDropdownVisible(false);
      }
      if (newFocus <= listRefs.current.length - 1) {
        const focusItem = listRefs.current[newFocus];
        focusItem && focusItem.focus();
        setFocus(newFocus);
      }
    }
  };

  const handleClickOutside = event => {
    const contains = listRefs.current.filter(
      ref => ref && ref.contains(event.target)
    );
    if (
      !contains.length &&
      _searchBoxElement.current &&
      !_searchBoxElement.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
  };

  const setSearchResult = (newValue: string) => {
    if (options && newValue) {
      let newList = searchInList(options, newValue);
      newList = limitNumberOfResults(newList, limit);
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
        <ul id="results" role="listbox" className={styles.searchList}>
          {list.map((listItem, key: number) => {
            return (
              <li
                aria-label={listItem.text}
                key={listItem.key}
                onClick={() => selectEvent(listItem)}
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
                role="option"
                aria-selected={key === focus}
              >
                <div
                  title={listItem.text}
                  className={styles.blackAlt}
                  tabIndex={-1}
                >
                  {listItem.text}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const genratedId = useId(id);
  const mainId = id ? id : 'searchfield-' + genratedId;
  const inputId = mainId + '-input';
  const labelId = mainId + '-label';

  return (
    <div id={mainId}>
      <LabelWithCallout
        id={labelId}
        label={label}
        buttonAriaLabel={labelButtonAriaLabel}
        inputId={inputId}
        help={help}
        onCalloutToggle={onCalloutToggle}
        autoDismiss={labelWithCalloutAutoDismiss}
        {...labelCallout}
      />
      {options ? (
        <div ref={_searchBoxElement}>
          <SearchBox
            {...rest}
            id={inputId}
            aria-expanded="false"
            type={'search'}
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
            componentRef={_componentRef}
            iconProps={{
              onClick: ev => (onSearchIcon ? onSearchIcon(ev) : null)
            }}
          />
          {dropdownVisible && renderSuggestions(searchResultList)}
        </div>
      ) : (
        <SearchBox
          type={'search'}
          {...props}
          className={classnames(styles.main, className)}
          componentRef={_componentRef}
          iconProps={{
            onClick: ev => (onSearchIcon ? onSearchIcon(ev) : null),
            title: onSearchIcon ? searchIconTitle : ''
          }}
        />
      )}
    </div>
  );
};

SearchField.defaultProps = {
  border: 'default',
  searchFieldSize: 'standard'
};

export default SearchField;
