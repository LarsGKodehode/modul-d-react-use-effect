import { useEffect } from "react"

function Timer() {
  useEffect(
    () => {
      // Code that have side effects
      const timerID = setInterval(
        () => {
          console.log("Foo")
        },
        1000
      )

      return () => {
        // Clean up after us
        clearInterval(timerID)
      }
    },
    []
  )
  return (
    <h1>Timer</h1>
  )
}

export default Timer;