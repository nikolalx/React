import './App.css';
import Heading from './components/Heading/Heading'
// import Main from './components/Main/Main'
import img from './/img.png'
import svg from './/svg.svg'

function App() {
  return (
    <>
      <Heading classNames={'heading'}>
        <img src={img} alt='none' />
        <img src={svg} alt='none' className='svg' />
      </Heading>
    </>
  );
}

export default App;
