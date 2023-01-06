import React, { useEffect } from 'react'

function useSetInterval(fn: Function, time: number, dependencies: React.DependencyList) {
  
    useEffect(() => {
        const interval = setInterval(fn, time)
        
        return () => {
            clearInterval(interval)
        }
        
    }, [dependencies])
}

export default useSetInterval