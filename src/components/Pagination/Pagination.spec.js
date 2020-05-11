import React from 'react';
import Pagination from './Pagination';
import { matches } from '../utils/test-utils';
import { mount } from 'enzyme';

function oppsettFullDOM(props) {
  const Wrapper = props => {
    const [currentPage, setCurrentPage] = React.useState(1);
    return (
      <Pagination
        {...props}
        currentPage={currentPage}
        onPageChange={page => setCurrentPage(page)}
      />
    );
  };

  return mount(<Wrapper {...props} />);
}

describe('Pagination komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <Pagination
        currentPage={1}
        onPageChange={() => jest.fn()}
        total={15}
        pageSize={5}
      />
    );
  });
  it('skal rendre i henhold til props', () => {
    const wrapper = oppsettFullDOM({
      ariaLabelNavigationLink: 'Go to page ',
      ariaLabelNavigationLinkActive: 'Current page, Page ',
      total: 15,
      pageSize: 5
    });
    const firstPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .first()
      .find('button');
    const lastPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .last()
      .find('button');
    expect(firstPageLink.prop('aria-label')).toEqual('Current page, Page 1');
    expect(firstPageLink.prop('aria-current')).toEqual(true);
    expect(lastPageLink.prop('aria-label')).toEqual('Go to page 3');
    expect(lastPageLink.prop('aria-current')).toEqual(false);
  });
  it('skal endre aktiv side på klikk', () => {
    const wrapper = oppsettFullDOM({
      total: 15,
      pageSize: 5
    });
    const firstPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .first()
      .find('button');
    const lastPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .last()
      .find('button');
    expect(firstPageLink.prop('aria-current')).toEqual(true);
    expect(lastPageLink.prop('aria-current')).toEqual(false);

    wrapper
      .find('ul')
      .last()
      .find('li')
      .last()
      .find('button')
      .simulate('click');
    expect(
      wrapper
        .find('ul')
        .last()
        .find('li')
        .first()
        .find('button')
        .prop('aria-current')
    ).toEqual(false);
    expect(
      wrapper
        .find('ul')
        .last()
        .find('li')
        .last()
        .find('button')
        .prop('aria-current')
    ).toEqual(true);
  });
});
