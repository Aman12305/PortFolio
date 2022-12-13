import React, { useLayoutEffect, useState } from 'react';

export function useWindowSize(size,setSize) {
  // const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export function ShowWindowDimensions() {
  const [width, height] = useWindowSize();
  return [width,height];
}

export function scrollToElement(element)
{
  const target = document.getElementById(element);
  window.scrollTo({
    top: target.offsetTop-50,
    behavior:'smooth',
  });
}