import { useEffect, useState } from 'react'
import './App.css'
import arrowDown from './assets/arrowDown.png'
import readingGirl from './assets/reading-girl.png'
import redLine from './assets/Vector-3.png'
import plus from './assets/plus.png'
import logo from './assets/logo.png'
import search from './assets/search.png'
import subtract from './assets/Subtract.png'
import appleIcon from './assets/Apple-icon.png'
import circle1 from './assets/circle1.png'
import circle2 from './assets/circle2.png'
import circle3 from './assets/circle3.png'
import circle4 from './assets/circle4.png'

function App() {
  const [data, setData] = useState(null)
  const [bottomText1, setBottomText1] = useState('Read a Book Day seeks to encourages reading an actual book - either to yourself or to others. Reading can improve vocabulary and cognitive skills.')
  const [bottomText2, setBottomText2] = useState(' Research has shown that reading through books creates more knowledge retention and is easier on the eyes than reading on an electronic device.')
  const [randomBottomText, setRandomBottomText] = useState('')

  const [randomLogo, setRandomLogo] = useState('Prenotare')
  const [randomHeader, setRandomHeader] = useState('Happy Read A Book Day')
  const [randomMenu1, setRandomMenu1] = useState('Home')
  const [randomMenu2, setRandomMenu2] = useState('Product')
  const [randomMenu3, setRandomMenu3] = useState('Review')
  const [randomMenu4, setRandomMenu4] = useState('Synopsis')
  const [randomMenu5, setRandomMenu5] = useState('Contact Us')
  const [randomTagLine, setRandomTagLine] = useState('Explore Favourite Book')
  const [randomPeachWord, setRandomPeachWord] = useState('September 6')
  const [randomScroll, setRandomScroll] = useState('Scroll for details')
  const [randomContactButton, setRandomContactButton] = useState('Contact Us')
  const [randomPromo1, setRandomPromo1] = useState('+10000 E-books')
  const [randomPromo2, setRandomPromo2] = useState('Lifetime acess')
 
  const apiFunction = async () => {
    const response = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&origin=*&rnnamespace=0&rnlimit=15')
    const jsonData = await response.json()
    setData(jsonData);
  }

  useEffect(() => {
    apiFunction()
  }, [])

  const buttonClick = () => {
    apiFunction()

    setBottomText1('You just changed a bunch of stuff on this site to random article titles from Wikipedia, like this one: ')
    setBottomText2('. Press the "Explore More" button to keep changing them over and over again and enjoy the slow, strange but inevitable descent into madness. Have Fun!')
    setRandomLogo(data.query.random[0].title)
    setRandomHeader(data.query.random[1].title)
    setRandomMenu1(data.query.random[2].title)
    setRandomMenu2(data.query.random[3].title)
    setRandomMenu3(data.query.random[4].title)
    setRandomMenu4(data.query.random[5].title)
    setRandomMenu5(data.query.random[6].title)
    setRandomTagLine(data.query.random[7].title)
    setRandomPeachWord(data.query.random[8].title)
    setRandomScroll(data.query.random[9].title)
    setRandomContactButton(data.query.random[10].title)
    setRandomPromo1(data.query.random[11].title)
    setRandomPromo2(data.query.random[12].title)
    setRandomBottomText(data.query.random[13].title)
  }

  return (
    <div className='App'>
        <div className='container'>

          <div className='top-container'>
            <div className='logo'>
            <img src={logo} alt='Prenotare logo' />{randomLogo}
            </div>
            <form className='search'>
              <img src={search} alt='Search field' />
              <input type='text' placeholder='Search' />
            </form>
            <div className='link-logo subtract'>
              <img src={subtract} alt='Logo' />
            </div>
            <div className='link-logo apple'>
              <img src={appleIcon} alt='Apple logo' />
            </div>
            <button className='button contact-button' >
              {randomContactButton}
            </button>
          </div>  

          <div className='main-container'>
            <div className='tagline'>{randomTagLine}</div>
            <h1 className='header'>{randomHeader}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            <div className='main-text'>National Read a Book Day on <span className='marked-date'>{randomPeachWord}</span> calls all book lovers to indulge in their favorite hobby, guilt-free.</div>
            <button className='button explore-button' onClick={buttonClick}>Explore More</button>
          </div>
          
          <nav className='menu'>
            <div className='menu-item current'>{randomMenu1}</div>
            <div className='menu-line'></div>
            <div className='menu-item'>{randomMenu2}</div>
            <div className='menu-line'></div>
            <div className='menu-item'>{randomMenu3}</div>
            <div className='menu-line'></div>
            <div className='menu-item'>{randomMenu4}</div>
            <div className='menu-line'></div>
            <div className='menu-item'>{randomMenu5}</div>
          </nav>
          
          <div className='promo-container-1'>
            <div className='promo-number-container'>
              <div className='promo-number'>01</div>
              <div className='promo-line-1'></div>
            </div>
            <div className='promo-text'>{randomPromo1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>

          <div className='promo-container-2'>
            <div className='promo-number-container'>
              <div className='promo-number'>02</div>
              <div className='promo-line-2'></div>
            </div>
            <div className='promo-text'>{randomPromo2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>

          <img className='red-line' src={redLine} /> 
          <img className='reading-girl' src={readingGirl} alt='Girl reading a book.' /> 
          
          <div className='plus-container'>
            <div>
              <img className='plus missing-plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
            </div>
            <div>
              <img className='plus  missing-plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
            </div>
            <div>
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
            </div>
            <div>
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus  missing-plus' src={plus} /> 
              <img className='plus  missing-plus' src={plus} /> 
            </div>
            <div>
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus  missing-plus' src={plus} /> 
              <img className='plus  missing-plus' src={plus} /> 
            </div>
            <div>
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus' src={plus} /> 
              <img className='plus  missing-plus' src={plus} /> 
              <img className='plus  missing-plus' src={plus} /> 
            </div>
          </div>

          <div className='circle-1'>
            <img src={circle1} />
          </div>
          <div className='circle-2'>
            <img src={circle2} />
          </div>
          <div className='circle-3'>
            <img src={circle3} />
          </div>
          <div className='circle-4'>
            <img src={circle4} />
          </div>
        

          <div className='bottom-container'>
            <div className='bottom-text'>
              {bottomText1}
              <span className='random-bottom-text'>{randomBottomText}</span>
              {bottomText2}
            </div>
            <div className='scroll-container'>
            {randomScroll}
            <br />
            <img className='arrow-down' src={arrowDown} alt='Arrow pointing down.' />  
            </div>
          </div>
        </div>
    </div>
  )
}

export default App