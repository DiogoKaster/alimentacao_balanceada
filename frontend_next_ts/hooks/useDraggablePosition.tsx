import { useState } from 'react';
import { DraggableEventHandler } from 'react-draggable';

type DraggableFoodPosition = { x: number; y: number };

export function useDraggablePosition() {
  const [position, setPosition] = useState<DraggableFoodPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDrag: DraggableEventHandler = (_, ui) => {
    setPosition((prev) => ({
      x: prev.x + ui.deltaX,
      y: prev.y + ui.deltaY,
    }));
  };

  const resetPosition = () => setPosition({ x: 0, y: 0 });

  return {
    position,
    isDragging,
    setIsDragging,
    handleDrag,
    resetPosition,
  };
}
