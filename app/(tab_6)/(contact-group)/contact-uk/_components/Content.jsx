import React from 'react';
import TermRows from './TermRows';
import TermForm from './TermForm';
import PhoneForm from './PhoneForm';
import PhoneRows from './PhoneRows';
import GeneralForm from './GeneralForm';
import ToggleForm from './ToggleForm';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <ToggleForm />
      <GeneralForm />
      <PhoneForm />
      <PhoneRows />
      <TermForm />
      <TermRows />
    </>
  );
} // end function
