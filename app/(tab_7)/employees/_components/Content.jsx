import React from 'react';
import ContentRows from './ContentRows';
import NewForm from './NewForm';
import EditPortal from './EditPortal';
import ResetPortal from './ResetPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getEmployees() {
  const response = await fetch(`${process.env.domainURL}/api/employees`, {
    cache: 'no-store',
    method: 'GET',
  });

  return response.json();
} // end function

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export default async function Content() {
  // ------------------------data---------------------
  const employees = await getEmployees();

  // ------------------------Page-----------------------
  return (
    <>
      <NewForm />
      <ContentRows employees={employees} />

      {/* portals */}
      <EditPortal employees={employees} />
      <ResetPortal employees={employees} />
    </>
  );
} // end function
