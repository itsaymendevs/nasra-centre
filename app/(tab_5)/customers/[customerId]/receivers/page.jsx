'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

// --------------------------------------------------------------------

export default function CustomerReceivers() {
  // ! redirect back page with replacing url
  const router = useRouter();
  useEffect(() => {
    router.replace('/customers/1');
  }, []);
} // end function
