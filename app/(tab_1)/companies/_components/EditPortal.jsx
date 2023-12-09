import GlobalPortal from '@/portals/GlobalPortal';
import React, { useState } from 'react';

export default function EditPortal() {
  // ------------------------ state -----------------------------
  const [isEditPortalActive, setIsEditPortalActive] = useState(false);

  // ------------------------ Page -----------------------------
  return (
    <>
      isEditPortalActive && <GlobalPortal>{/* here the modal */}</GlobalPortal>
    </>
  );
} // end function
