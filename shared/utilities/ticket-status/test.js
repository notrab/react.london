import { getTicketStatusOptions } from '.';

describe('getTicketStatusOptions New', () => {
  it('returns the correct status properties for PRE_RELEASE', () => {
    const event = {
      status: 'PRE_RELEASE',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets will go live on',
      subtitle: 'Date',
      buttonText: 'FREE TICKET AVAILABLE SOON',
      buttonLink: undefined,
    });
  });
  it('returns the correct status properties for TICKETS_LIVE', () => {
    const event = {
      status: 'TICKETS_LIVE',
      ticketLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets live',
      subtitle: 'To get yours, go to',
      buttonText: 'Free Ticket',
      buttonLink: 'http://www.google.com',
      linkType: 'ticketLink',
    });
  });
  it('returns the correct status properties for WAITLIST', () => {
    const event = {
      status: 'WAITLIST',
      ticketLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets now sold out',
      subtitle: 'Join the waiting list on',
      buttonText: 'Join Waitlist',
      buttonLink: 'http://www.google.com',
      linkType: 'ticketLink',
    });
  });
  it('returns the correct status properties for LIVE_STREAM', () => {
    const event = {
      status: 'LIVE_STREAM',
      streamingLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets now sold out',
      subtitle: 'Didn’t make it to the meetup? We got your back.',
      buttonText: 'Join Live Stream',
      buttonLink: 'http://www.google.com',
      linkType: 'streamingLink',
    });
  });
  it('returns the correct status properties for EVENT_ENDED', () => {
    const event = {
      status: 'EVENT_ENDED',
      streamingLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'This event has ended',
      subtitle: 'Tickets now sold out',
      buttonText: 'Watch Video',
      buttonLink: 'http://www.google.com',
      linkType: 'streamingLink',
    });
  });
  it('returns the correct status properties when no status is provided', () => {
    const result = getTicketStatusOptions({});
    expect(result).to.deep.equal({
      title: 'Tickets currently unavailable',
      subtitle: 'Please check back later for further details',
      buttonText: 'Tickets Unavailable',
    });
  });
});
