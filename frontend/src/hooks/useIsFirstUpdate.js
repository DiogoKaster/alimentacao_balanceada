import React, { useEffect, useRef } from 'react';

const useIsFirstUpdate = () => {
    const firstUpdate = useRef(true);

    useEffect(() => {
       firstUpdate.current = false
    });

    return firstUpdate.current
}

export default useIsFirstUpdate