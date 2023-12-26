import './App.scss';
import Heading from './components/Heading/Heading'
import Section1 from './components/Section1/Section1'
// import Main from './components/Main/Main'
import img from './/images/img.png'
import svg from './/images/svg.svg'

function App() {
  const h1 = 'About NYC Running Club'
  const p = 'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla. Lorem Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus pellentesque eu tincidunt tortor aliquam nulla. '
  
  return (
    <>
      <Heading classNames={'heading'}>
        <img src={img} alt={img} />
        <img src={svg} alt={img} className='svg' />
      </Heading>

      <Section1 classNames={'section1'} >
        <div className='circle'></div>
        <div className="circleImg"></div>
        <div className="circleText">
          <div className='flex'>
            <h1>{h1}</h1>
            <p>{p}</p>
          </div>
        </div>
        <div className='donut'></div>
      </Section1>
    </>
  );
}

export default App;
