import React from 'react';
import Controls from '../controls/Controls';

const CompanyFormFields = [
  {
    id: 'company_name',
    field: (
      <Controls.Input
        type="text"
        label="Nazwa firmy"
        name="company_name"
        variant="outlined"
      />
    )
  },
  {
    id: 'nip',
    field: (
      <Controls.Input
        type="text"
        label="Nip firmy"
        name="nip"
        variant="outlined"
      />
    )
  },
  {
    id: 'company_street',
    field: (
      <Controls.Input
        type="text"
        label="Ulica"
        name="company_street"
        variant="outlined"
      />
    )
  },
  {
    id: 'company_house_number',
    field: (
      <Controls.Input
        type="text"
        label="Numer domu"
        name="company_house_number"
        variant="outlined"
      />
    )
  },
  {
    id: 'company_apartment_number',
    field: (
      <Controls.Input
        type="text"
        label="Numer lokalu"
        name="company_apartment_number"
        variant="outlined"
      />
    )
  },
  {
    id: 'company_post_code',
    field: (
      <Controls.Input
        type="text"
        label="Kod pocztowy"
        name="company_post_code"
        variant="outlined"
      />
    )
  },
  {
    id: 'company_city',
    field: (
      <Controls.Input
        type="text"
        label="Miejscowość"
        name="company_city"
        variant="outlined"
      />
    )
  },
  {
    id: 'company_country',
    field: (
      <Controls.Input
        type="text"
        label="Polska"
        name="company_country"
        variant="outlined"
        disabled
      />
    )
  },
  {
    id: 'company_locker',
    field: (
      <Controls.Input
        type="text"
        label="Wybierz paczkomat"
        name="company_locker"
        variant="outlined"
        disabled
      />
    )
  }
];

export default CompanyFormFields;
