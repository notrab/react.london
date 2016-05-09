import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';

import TextField from './TextField/TextField.js';
import RichField from './RichField/RichField.js';

import Radium, { Style } from 'radium';

class Editor extends Component {
  render() {
    return (
      <aside style={styles} className="editor">
        {genericStyles}

        <h2>About section</h2>

        <section style={styles.section}>

          <Field
            name="aboutTitle"
            component={field =>
              <TextField field={field} label="Title" />
            }/>

          <Field
            name="aboutSummary"
            component={field =>
              <RichField field={field} label="Summary" />
            }/>

        </section>

        <h2>Upcoming Meetup</h2>

        <section style={styles.section}>

          <Field
            name="upcomingMeetupName"
            component={field =>
            <TextField field={field} label="Name" />
          }/>

          <Field
            name="upcomingMeetupDetails"
            component={field =>
            <RichField field={field} label="Details" />
          }/>

          <Field
            name="upcomingMeetupWhen"
            component={field =>
            <TextField field={field} label="When is it happening?" />
          }/>

        <h4 style={styles.subHeading}>Details about the meetup location</h4>

          <Field
            name="upcomingMeetupWhere"
            component={field =>
            <TextField field={field} label="Where is it happening?" />
          }/>

          <Field
            name="upcomingMeetupWhereLink"
            component={field =>
            <TextField field={field} label="Direction link" />
          }/>

        <h4 style={styles.subHeading}>More information link</h4>

          <Field
            name="upcomingMeetupCtaText"
            component={field =>
            <TextField field={field} label="Link text" />
          }/>

          <Field
            name="upcomingMeetupCtaLink"
            component={field =>
            <TextField field={field} label="Link" />
          }/>

        <h4 style={styles.subHeading}>Live stream link</h4>
          <Field
            name="upcomingMeetupStreamingText"
            component={field =>
            <TextField field={field} label="Link text" />
          }/>

          <Field
            name="upcomingMeetupStreamingLink"
            component={field =>
            <TextField field={field} label="Link" />
          }/>

      </section>
      </aside>
    );
  }
}

Editor = reduxForm({
  form: 'editor',
})(Editor);

const styles = {
  borderRight: '2px solid black',
  padding: '20px',
  maxWidth: '500px',
  resize: 'horizontal',
  overflow: 'auto',
  section: {
    display: 'block',
    marginBottom: 40,
  },
  subHeading: {
    marginTop: '30px',
    marginBottom: '10px',
  },
};

const genericStyles  = (<Style
  scopeSelector=".editor"
  rules={{
    'input, textarea': {
      display: 'block',
      width: '100%',
      padding: '2px 5px',
      margin: '2px 0px 20px',
      fontSize: '1em',
    },
    textarea: {
      maxWidth: '100%',
      minHeight: 200,
    },
    '.DraftEditor-root': {
      width: '100%',
      padding: '2px 5px',
      margin: '2px 0px 20px',
      border: '1px solid #CCCCCC',
    },
    '.public-DraftStyleDefault-block': {
      marginBottom: '1em',
    },
  }}
/>);


export default Radium(Editor);
