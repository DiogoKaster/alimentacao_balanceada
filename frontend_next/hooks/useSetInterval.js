import React, { useEffect } from 'react'

function useSetInterval(fn, time, dependencies) {
  
    useEffect(() => {
        const interval = setInterval(fn, time)
        
        return () => {
            clearInterval(interval)
        }
        
    }, [dependencies])
}

export default useSetInterval