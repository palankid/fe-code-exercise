import React from 'react';
import { string } from 'prop-types';

import { Field, Label, Hint } from '../FieldParts';
import { Input } from './SalaryInput.styled';

export default function SalaryInput({ label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label>{label}</Label>
      <Input {...props} {...invalidAttr} />
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

SalaryInput.propTypes = {
  label: string.isRequired,
  helper: string,
  errorMsg: string,
};

SalaryInput.defaultProps = {
  helper: '',
  errorMsg: '',
};
