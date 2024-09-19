import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import styles from './DraggableFood.module.scss';
import { checkOverlap } from '../../utils/checkOverlap';
import { useDraggablePosition } from '../../hooks/useDraggablePosition';
import Image from 'next/image';

type DraggableFoodProps = {
  imgSrc: string;
  overlappingObjectBoundingClass: string;
  isOverlappingCallback: (isOverlapping: boolean, imgSrc: string, resetFoodPosition: () => void) => void;
  top: string;
};

function DraggableFood({ imgSrc, overlappingObjectBoundingClass, isOverlappingCallback, top }: DraggableFoodProps) {
  const componentRef = useRef<HTMLImageElement>(null);
  const { position, isDragging, setIsDragging, handleDrag, resetPosition } = useDraggablePosition();

  useEffect(() => {
    // Only check overlapping when not dragging
    if (!isDragging) {
      const isOverlapping = checkOverlap(componentRef, overlappingObjectBoundingClass);
      isOverlappingCallback(isOverlapping, imgSrc, resetPosition);
    }
  }, [isDragging]);

  return (
    <Draggable
      bounds="parent"
      position={position}
      onDrag={handleDrag}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <Image
        className={styles['draggable-food']}
        src={imgSrc}
        alt="Comida"
        ref={componentRef}
        style={{ top, left: '0px' }}
        width={1}
        height={1}
      />
    </Draggable>
  );
}

export default DraggableFood;
