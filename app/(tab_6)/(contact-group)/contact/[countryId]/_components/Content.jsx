import React from 'react';
import TermRows from './TermRows';
import TermForm from './TermForm';
import PhoneForm from './PhoneForm';
import PhoneRows from './PhoneRows';
import GeneralForm from './GeneralForm';
import ToggleForm from './ToggleForm';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContact(countryId) {
  const response = await fetch(
    `${process.env.domainURL}/api/contact/${countryId}`,
    {
      cache: 'no-store',
      method: 'GET',
    }
  );

  return response.json();
} // end function

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export default async function Content({ countryId }) {
  // ------------------------data---------------------
  const { contact, phones, terms, country } = await getContact(countryId);

  // ------------------------Page-----------------------

  return (
    <>
      <ToggleForm country={country} />
      <GeneralForm country={country} contact={contact} />
      <PhoneForm country={country} phones={phones} />
      <PhoneRows phones={phones} />
      <TermForm country={country} />
      <TermRows terms={terms} />

      {/* portals */}
      <EditPortal country={country} terms={terms} />
    </>
  );
} // end function
