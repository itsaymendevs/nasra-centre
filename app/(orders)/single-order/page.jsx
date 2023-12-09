'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

// --------------------------------------------------------------------

export default function SingleOrderRedirect() {
  // ! redirect back page with replacing url
  const router = useRouter();
  useEffect(() => {
    router.replace('/orders');
  }, []);
} // end function
