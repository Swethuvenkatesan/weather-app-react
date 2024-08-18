import sunny from './assests/logo-weather.png'

const Header = () => {
  return (
    <header className='header-div'>
        <span className='main-logo'><img src={sunny} className='logo-img'></img> <h4 className='logo-name'>Weather App</h4></span>
    </header>
  )
}

export default Header 



