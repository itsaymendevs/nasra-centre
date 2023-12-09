import GlobalPortal from '@/portals/GlobalPortal';
import React, { useState } from 'react';

export default function NewPortal() {
  // ------------------------ state -----------------------------
  const [isNewPortalActive, setIsNewPortalActive] = useState(false);

  // ------------------------ Page -----------------------------
  return (
    <>
      isNewPortalActive && <GlobalPortal>{/* here the modal */}</GlobalPortal>
    </>
  );
} // end function
