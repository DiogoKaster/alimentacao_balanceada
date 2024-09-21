export function checkOverlap(
  componentRef: React.RefObject<HTMLElement>,
  overlappingObjectBoundingClass: string
): boolean {
  const overlappingObjectBounding = document
    .getElementsByClassName(overlappingObjectBoundingClass)[0]
    ?.getBoundingClientRect();

  if (!componentRef.current || !overlappingObjectBounding) return false;

  const componentBounding = componentRef.current.getBoundingClientRect();

  return (
    componentBounding.top >= overlappingObjectBounding.top &&
    componentBounding.bottom <= overlappingObjectBounding.bottom &&
    componentBounding.left >= overlappingObjectBounding.left &&
    componentBounding.right <= overlappingObjectBounding.right
  );
}
