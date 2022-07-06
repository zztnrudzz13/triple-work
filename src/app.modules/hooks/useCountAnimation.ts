import { useEffect, useRef, useState } from 'react'

type CountAnimationProps = {
  initialNumber: number
  endNumber: number
}

function useCountAnimation({ initialNumber, endNumber }: CountAnimationProps) {
  const [count, setCount] = useState(initialNumber)
  const countRef = useRef<null | NodeJS.Timer>(null)
  const maxTime = 2000
  const incrementMillisecond = 50
  const numberDivision = Math.round(maxTime / incrementMillisecond)

  useEffect(() => {
    if (countRef.current !== null) {
      return
    }
    countRef.current = setInterval(() => {
      const incrementCount =
        1 - Math.pow(2, -15 * (++initialNumber / numberDivision))
      setCount(Math.round(endNumber * incrementCount))
    }, incrementMillisecond)

    if (count === endNumber) {
      clearInterval(countRef.current)
      countRef.current = null
    }
  }, [count, endNumber, initialNumber, numberDivision])

  return { count }
}

export default useCountAnimation
