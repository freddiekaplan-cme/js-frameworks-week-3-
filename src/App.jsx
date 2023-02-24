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

function App() {
  const [randomWiki, setRandomWiki] = useState()
  
  useEffect(() => {
    fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&origin=*&rnnamespace=0&rnlimit=5')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setRandomWiki(data.query.random)
    })
  }, [])
  //console.log(randomWiki[0].title)

  //<div>{randomWiki[0].title}</div>
  return (
    <div className='App'>
        <div className='container'>

          <div className='top-container'>
            <div className='logo'>
            <img src={logo} alt='Prenotare logo' />Prenotare
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
            <button className='button contact-button'>
              Contact Us
            </button>

          </div>  

          <div className='main-container'>
            <div className='tagline'>Explore Favourite Book</div>
            <h1 className='header'>Happy Read A<br />Book Day</h1>
            <div className='main-text'>National Read a Book Day on <span className='marked-date'>September 6</span> calls all book lovers to indulge in their favorite hobby, guilt-free.</div>
            <button className='button explore-button'>Explore More</button>
          </div>
          
          <nav className='menu'>
            <div className='menu-item current'>Home</div>
            <div className='menu-line'></div>
            <div className='menu-item'>Product</div>
            <div className='menu-line'></div>
            <div className='menu-item'>Review</div>
            <div className='menu-line'></div>
            <div className='menu-item'>Synopsis</div>
            <div className='menu-line'></div>
            <div className='menu-item'>Contact Us</div>
          </nav>
          
          <div className='promo-container-1'>
            <div className='promo-number-container'>
              <div className='promo-number'>01</div>
              <div className='promo-line-1'></div>
            </div>
            <div className='promo-text'>+10000<br />E-books</div>
          </div>

          <div className='promo-container-2'>
            <div className='promo-number-container'>
              <div className='promo-number'>02</div>
              <div className='promo-line-2'></div>
            </div>
            <div className='promo-text'>Lifetime<br />acess</div>
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

          <div className='bottom-container'>
            <div className='bottom-text'>
              Read a Book Day seeks to encourages reading an actual book - either to yourself or to others. Reading can improve vocabulary and cognitive skills. Research has shown that reading through books creates more knowledge retention and is easier on the eyes than reading on an electronic device.
            </div>
            <div className='scroll-container'>
            Scroll for details
            <br />
            <img className='arrow-down' src={arrowDown} alt='Arrow pointing down.' />  
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
