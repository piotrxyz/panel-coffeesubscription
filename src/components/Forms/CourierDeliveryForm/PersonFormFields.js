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
  },
  {
    id: 'street',
    field: (
      <Controls.Input
        type="text"
        label="Ulica"
        name="street"
        variant="outlined"
      />
    )
  },
  {
    id: 'house_number',
    field: (
      <Controls.Input
        type="text"
        label="Numer domu"
        name="house_number"
        variant="outlined"
      />
    )
  },
  {
    id: 'apartment_number',
    field: (
      <Controls.Input
        type="text"
        label="Numer lokalu"
        name="apartment_number"
        variant="outlined"
      />
    )
  },
  {
    id: 'post_code',
    field: (
      <Controls.Input
        type="text"
        label="Kod pocztowy"
        name="post_code"
        variant="outlined"
      />
    )
  },
  {
    id: 'city',
    field: (
      <Controls.Input
        type="text"
        label="Miejscowość"
        name="city"
        variant="outlined"
      />
    )
  },
  {
    id: 'country',
    field: (
      <Controls.Input
        type="text"
        label="Polska"
        name="country"
        variant="outlined"
        disabled
      />
    )
  },
  {
    id: 'courier_comments',
    field: (
      <Controls.Input
        type="text"
        label="Uwagi dla kuriera"
        name="courier_comments"
        variant="outlined"
      />
    )
  }
];

export default PersonFormFields;
