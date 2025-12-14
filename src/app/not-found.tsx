'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to root immediately
    router.replace('/');
  }, [router]);

  // Return null since we're redirecting anyway
  // The loading animation will show briefly during redirect
  return null;
}