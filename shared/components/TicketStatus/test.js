import React from 'react';
import TicketStatus, { StatusButton } from '.';
import { shallow } from 'enzyme';

const props = {
  externalLinks: [
    {
      title: 'foo baz',
      url: 'foobaz.com',
      type: 'OTHER',
    },
  ],
  startDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
  endDateTime: {
    iso: '2016-07-26T08:30:00+0000',
  },
};

describe('TicketStatus component', () => {
  it('renders OK with all props', () => {
    shallow(<TicketStatus {...props} />);
  });

  it('renders OK without props', () => {
    shallow(<TicketStatus />);
  });
});

describe('StatusButton component', () => {
  it('renders a disabled StatusButton with the disabled className and # link', () => {
    const inactiveButtonProps = {
      buttonText: 'bar',
      buttonLink: undefined,
    };
    const wrapper = shallow(<StatusButton {...inactiveButtonProps} />);
    const linkProps = wrapper.find('a').props();

    expect(linkProps.href).to.equal(undefined);
    expect(linkProps.children).to.equal('bar');
    expect(linkProps.className)
      .to.equal('TicketStatus__booking-btn TicketStatus__booking-btn--disabled');
  });

  it('renders an active StatusButton with the active class Name and passed link', () => {
    const activeButtonProps = {
      buttonText: 'foo',
      buttonLink: 'foobaz.com',
    };
    const wrapper = shallow(<StatusButton {...activeButtonProps} />);
    const linkProps = wrapper.find('a').props();

    expect(linkProps.href).to.equal('foobaz.com');
    expect(linkProps.children).to.equal('foo');
    expect(linkProps.className)
      .to.equal('TicketStatus__booking-btn TicketStatus__booking-btn--active');
  });
});
