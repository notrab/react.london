import React, { PropTypes } from 'react';

const NextCommunityEvent = ({
  eventTitle,
  eventDate,
  eventAddress,
  eventStartTime,
  eventEndTime,
}) => (
  <section className="NextCommunityEvent block">
    <div className="content">
      <h2 className="NextCommunityEvent__header">Next Event</h2>
      <article className="NextCommunityEvent__section-container">
        <div className="NextCommunityEvent__section NextCommunityEvent__section__details">
          <h3 className="NextCommunityEvent__details__heading">{eventTitle}</h3>
          <ul className="NextCommunityEvent__details">
            <li>
              <a className="NextCommunityEvent__link--date">{eventDate}</a>
            </li>
            <li>
              <a className="NextCommunityEvent__link--place">{eventAddress}</a>
            </li>
            <li>
              <a className="NextCommunityEvent__link--time">{eventStartTime} - {eventEndTime}</a>
            </li>
          </ul>
        </div>
        <div className="NextCommunityEvent__section NextCommunityEvent__section__booking">
          <h3 className="NextCommunityEvent__booking__heading">TICKETS NOW SOLD OUT</h3>
          <div className="NextCommunityEvent__booking-btn__container">
            <a
              className="NextCommunityEvent__booking-btn NextCommunityEvent__booking-btn--active"
              href="https://skillsmatter.com/meetups/8306-react-graphql-and-relay-in-practice-and-draft-js-in-the-real-world"
            >
              Join waiting list
            </a>
          </div>
          <p className="NextCommunityEvent__live-stream-text">
            To get reminders about tickets and future
            events <a className="NextCommunityEvent__live-stream-text--link" href="#stay-tuned">
            subscribe here</a>
          </p>

        </div>
      </article>
    </div>
  </section>
);

NextCommunityEvent.propTypes = {
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventAddress: PropTypes.string,
  eventStartTime: PropTypes.string,
  eventEndTime: PropTypes.string,
};

export default NextCommunityEvent;