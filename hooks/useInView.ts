
import { useState, useEffect, useRef, RefObject } from 'react';

type UseInViewReturn<T extends HTMLElement> = [RefObject<T>, boolean];

export const useInView = <T extends HTMLElement,>(options: IntersectionObserverInit): UseInViewReturn<T> => {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Optional: stop observing once it's in view
        if(ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};
