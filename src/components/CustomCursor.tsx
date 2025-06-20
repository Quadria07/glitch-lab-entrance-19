
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('body::after') as HTMLElement;
    
    const moveCursor = (e: MouseEvent) => {
      const cursorElement = document.createElement('div');
      cursorElement.style.position = 'fixed';
      cursorElement.style.left = e.clientX + 'px';
      cursorElement.style.top = e.clientY + 'px';
      cursorElement.style.width = '20px';
      cursorElement.style.height = '20px';
      cursorElement.style.background = 'black';
      cursorElement.style.borderRadius = '50%';
      cursorElement.style.pointerEvents = 'none';
      cursorElement.style.zIndex = '9999';
      cursorElement.style.transform = 'translate(-50%, -50%)';
      cursorElement.style.transition = 'transform 0.1s ease';
      cursorElement.className = 'custom-cursor';
      
      // Remove existing cursor
      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }
      
      document.body.appendChild(cursorElement);
    };

    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }
    };
  }, []);

  return null;
};

export default CustomCursor;
