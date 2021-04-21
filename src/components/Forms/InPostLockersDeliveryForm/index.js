/* eslint-disable no-undef */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Controls from '../controls/Controls';
import PersonFormFields from './PersonFormFields';
import CompanyFormFields from './CompanyFormFields';
// import validate from '../controls/validate';
import FormHeading from '../FormHeading';
import { FormStyled, FormFields } from '../styles';
import {
  FormControlStyled,
  Icon,
  CheckedIcon,
  RadioStyled
} from '../controls/RadioButtons';

const InPostMap = styled.div``;

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(1000);
  // eslint-disable-next-line no-alert
  window.alert(JSON.stringify(values, 0, 2));
  // eslint-disable-next-line no-console
  console.log('submitted', JSON.stringify(values, 0, 2));
};

function InPostLockersDeliveryForm() {
  const [selectedValue, setSelectedValue] = useState('person');
  const handleCheck = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <FormHeading title="Dane do dostawy" />
      <FormControlStyled component="fieldset">
        <RadioGroup
          row
          aria-label="status"
          name="status"
          onChange={handleCheck}
        >
          <FormControlLabel
            checked={selectedValue === 'person'}
            onChange={handleCheck}
            value="person"
            control={
              <RadioStyled
                color="default"
                checkedIcon={
                  <CheckedIcon>
                    <span />
                  </CheckedIcon>
                }
                icon={<Icon />}
              />
            }
            label="Osoba fizyczna"
          />
          <FormControlLabel
            checked={selectedValue === 'company'}
            onChange={handleCheck}
            value="company"
            control={
              <RadioStyled
                color="default"
                checkedIcon={
                  <CheckedIcon>
                    <span />
                  </CheckedIcon>
                }
                icon={<Icon />}
              />
            }
            label="Firma"
          />
        </RadioGroup>
      </FormControlStyled>
      {selectedValue === 'person' ? (
        <>
          <Form
            onSubmit={onSubmit}
            // initialValues={{}}
            // validate={validate}
            render={({ handleSubmit, submitting, values }) => (
              <FormStyled onSubmit={handleSubmit} noValidate>
                <FormFields>
                  {PersonFormFields.map((item) => (
                    <div key={item.id}>{item.field}</div>
                  ))}
                  <InPostMap id="easypack-map" />
                </FormFields>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
                <Controls.SubmitBtn title="Zapisz" disabled={submitting} />
              </FormStyled>
            )}
          />
        </>
      ) : (
        <>
          <Form
            onSubmit={onSubmit}
            // initialValues={{}}
            // validate={validate}
            render={({ handleSubmit, submitting, values }) => (
              <FormStyled onSubmit={handleSubmit} noValidate>
                <FormFields>
                  {CompanyFormFields.map((item) => (
                    <div key={item.id}>{item.field}</div>
                  ))}
                  <InPostMap id="easypack-map" />
                </FormFields>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
                <Controls.SubmitBtn title="Zapisz" disabled={submitting} />
              </FormStyled>
            )}
          />
        </>
      )}
    </>
  );
}

export default InPostLockersDeliveryForm;
