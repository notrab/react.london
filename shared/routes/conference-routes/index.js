import React from 'react';
import { Route, Redirect } from 'react-router';

import ConferenceLayout from '../../components/ConferenceLayout';
import Conference from '../../components/Conference';
import TicketPage from '../../components/TicketPage';
import ConferencePartners from '../../components/ConferencePartners';
import CodeOfConduct from '../../components/ConferenceCodeOfConduct';

export default function routes(state) {
  const Partners = () => <ConferencePartners {...state} />;
  const Tickets = () => <TicketPage {...state} />;
  return (
    <Route>
      <Route component={ConferenceLayout} navbar >
        <Route path="/" component={Conference} />
        <Route path="/partners" component={Partners} />
        <Route path="/tickets" component={Tickets} />
      </Route>

      <Route component={ConferenceLayout} navbar={false} >
        <Route path="/code-of-conduct" component={CodeOfConduct} />
      </Route>

      <Redirect path="/conference" to="/" />
    </Route>
  );
}