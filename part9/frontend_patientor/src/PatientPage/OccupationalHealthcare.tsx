import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import { OccupationalHealthcareEntry } from '../types';

const styled = { margin: 10 };

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => (
  <div>
    <Card styled={styled}>
      <Card.Content>
        {entry.date} <Icon name="user doctor" />
      </Card.Content>
      <Card.Content description={entry.description} />
    </Card>
  </div>
);

export default OccupationalHealthcare;
