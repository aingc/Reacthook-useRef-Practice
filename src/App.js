import { useState, useEffect, useRef } from 'react'

export default function App() {
  const [name, setName] = useState('');
  /*const renderCount = useRef(1) //persisted between current renders

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  });*/
  const prevName = useRef()

  /*const focus = () => {
    inputRef.current.focus()
  }*/

  useEffect(() => {
    prevName.current = name
  }, [name]);
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  )
}