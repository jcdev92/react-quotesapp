import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

function App() {
  const getRandomElement = (array) => {
    const indexRandom = Math.floor(Math.random() * array.length)
    return array[indexRandom]
  }

  const quoteRandom = getRandomElement(quotes)
  const colorRandom = getRandomElement(colors)

  const [quote, setUser] = useState(quoteRandom)
  const [color, setColor] = useState(colorRandom)

  const handleClick = () => {
    const quoteRandom = getRandomElement(quotes)
    const colorRandom = getRandomElement(colors)
    setUser(quoteRandom)
    setColor(colorRandom)
  }

  let bgColor = {
    backgroundColor: colorRandom
  }

  return (
    <body style={bgColor}>
    <div className="App">
      <QuoteBox quoteRandom={quoteRandom} colorRandom={colorRandom} handleClick={handleClick}/>
    </div>
    </body>
  )
}

export default App
