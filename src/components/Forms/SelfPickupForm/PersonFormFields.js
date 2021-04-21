import React from 'react';
import Controls from '../controls/Controls';

const PersonFormFields = [
  {
    id: 'first_name',
    field: (
      <Controls.Input
        type="text"
        label="Imię"
        name="first_name"
        variant="outlined"
      />
    )
  },
  {
    id: 'last_name',
    field: (
      <Controls.Input
        type="text"
        label="Nazwisko"
        name="last_name"
        variant="outlined"
      />
    )
  },
  {
    id: 'phone_number',
    field: (
      <Controls.Input
        type="text"
        label="Telefon kontaktowy"
        name="phone_number"
        variant="outlined"
      />
    )
  },
  {
    id: 'order_comments',
    field: (
      <Controls.Input
        type="text"
        label="Uwagi do zamówienia"
        name="order_comments"
        variant="outlined"
      />
    )
  }
];

export default PersonFormFields;
