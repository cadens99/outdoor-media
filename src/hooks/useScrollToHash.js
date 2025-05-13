// src/hooks/useScrollToHash.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow time for the page to render first
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);
}
