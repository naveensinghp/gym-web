import * as React from 'react';
import throttle from 'lodash/throttle';

export default function useRelativeMousePosition(
  ref,
  throttleDuration = 500
) {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  const [boundingBox, setBoundingBox] = React.useState(null);

  const getThrottledBoundingBox = React.useMemo(
    () =>
      throttle(() => {
        if (!ref.current) {
          return null;
        }

        return ref.current.getBoundingClientRect();
      }, throttleDuration),
    [ref, throttleDuration]
  );

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    function handlePointerMove(event) {
      const boundingBox = getThrottledBoundingBox();
      if (!boundingBox) {
        return;
      }

      setMousePosition({
        x: event.clientX - boundingBox.left - boundingBox.width / 2,
        y: event.clientY - boundingBox.top - boundingBox.height / 2,
      });
      setBoundingBox(boundingBox);
    }

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [ref, getThrottledBoundingBox]);

  return [mousePosition, boundingBox];
}