const getInitialState = () => ({
  aboutTitle: 'London React User Group',
  aboutSummary: {
    entityMap: {},
    blocks: [
      {
        key: '305s2',
        text: 'This group was established by Red Badger, a software company at Old Street.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: 'a6j5n',
        text: 'React is already having a huge impact on the way we think about Web UI development at Red Badger and this is an opportunity to learn why and share your own experiences.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '6eu1n',
        text: 'We meet once a month, usually on the 3rd Wednesday of each month',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '756f1',
        text: 'We generally have 2 or 3 speakers and loads of questions, pizzas and beer.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '6lvqe',
        text: 'We are a sociable group and very welcoming to newcomers. Follow us on Twitter @Londonreact and join the conversation on Slack here',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: '425i0',
        text: 'See you soon!',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ],
  },
  upcomingMeetupName: 'June React User Group',
  upcomingMeetupDetails: {
    entityMap: {},
    blocks: [
      {
        key: '151i4',
        text: 'TICKET INFO WILL FOLLOW',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 23,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: 'd3g2j',
        text: 'Join us for an evening of great conversation around React.js- ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      }, {
        key: 'dl9t8',
        text: '6:30- Doors open for pizza and beers ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 4,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: '9fntu',
        text: '7:00- Intro from Stu ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 4,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: 'elsnd',
        text: '7:10- 2 or 3 speakers each with 20 minutes to talk followed by Q&A ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 4,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: '9nf5s',
        text: '8:30\/ 9:00- Everyone is welcome to stay for another drink Our speakers for the evening are.... ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          {
            offset: 0,
            length: 10,
            style: 'BOLD',
          },
        ],
        entityRanges: [],
      }, {
        key: '6iivf',
        text: 'More details will follow shortly We will live stream and record the event- we will post a link here prior to the event.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
      },
    ],
  },
  upcomingMeetupWhen: 'Tuesday, June 28, 2016',
  upcomingMeetupWhere: 'Facebook, 10 Brock Street, Regents Place, London',
  upcomingMeetupWhereLink: 'https://maps.google.com/maps?f=q&hl=en&q=10+Brock+Street%2C+Regents+Place%2C+London%2C+gb',
  upcomingMeetupCtaText: 'For full details please see',
  upcomingMeetupCtaLink: 'http://www.meetup.com/London-React-User-Group/events/230114076/',
  upcomingMeetupStreamingText: 'Check out the live stream',
  upcomingMeetupStreamingLink: 'https://www.youtube.com/channel/UCHlIVrJki1BxwKe7NtFYZRg',
  upcomingMeetupSpeaker1Name: 'Zoë',
  upcomingMeetupSpeaker1Title: 'Stupid names for npm modules',
  upcomingMeetupSpeaker1Blurb: 'If it\'s a word, it\'s probably been used to name a npm module.',
  upcomingMeetupSpeaker1Picture: 'http://lorempixel.com/200/200/animals/',
  upcomingMeetupSpeaker2Name: 'Marcel',
  upcomingMeetupSpeaker2Title: 'Writing COBOL underwater',
  upcomingMeetupSpeaker2Blurb: 'Writing COBOL underwater is quite difficult, as Marcel will explain',
  upcomingMeetupSpeaker2Picture: 'http://lorempixel.com/200/200/animals/',
  upcomingMeetupSpeaker3Name: 'To be confirmed',
  upcomingMeetupSpeaker3Title: 'To be confirmed',
  upcomingMeetupSpeaker3Blurb: 'If you are interested in taking this slot, please talk to Amy',
  upcomingMeetupSpeaker3Picture: 'http://lorempixel.com/200/200/animals/',
});

const initialValues = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'FETCHED_CONTENT':
      console.log('FETCHED_CONTENT');
      console.log(action.payload.json());
      return { ...action.payload };
    default:
      return state;
  };
};

export default initialValues;
