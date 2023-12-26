import './App.scss';
import Heading from './components/Heading/Heading'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2';
// import Main from './components/Main/Main'
import img from './/images/img.png'
import svg from './/images/svg.svg'

//running dogs
import 

function App() {
  const nyc = 'About NYC Running Club'
  const pnyc = 'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla. Lorem Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus pellentesque eu tincidunt tortor aliquam nulla. '

  const running = 'Running and jogging'

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
            <h1>{nyc}</h1>
            <p>{pnyc}</p>
          </div>
        </div>
        <div className='donut'></div>
      </Section1>

      <Section2 classNames={'section2'}>
        <h1>{running}</h1>
        <div className='bigCard'>
          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>

          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>

          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>

          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>
        </div>
      </Section2>
    </>
  );
}

export default App;
