import './App.scss';
import Heading from './components/Heading/Heading'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2';
// import Main from './components/Main/Main'
import img from './/images/img.png'
import svg from './/images/svg.svg'

//running dogs
import dog1 from './/images/dog1.jpg'
import dog2 from './/images/dog2.jpg'
import dog3 from './/images/dog3.jpg'
import dog4 from './/images/dog4.jpg'


function App() {
  const nyc = 'About NYC Running Club'
  const pnyc = 'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla. Lorem Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus pellentesque eu tincidunt tortor aliquam nulla. '

  const running = 'Running and jogging'
  const dogs = 'dogs'//class for all running dog images
  const card = 'card' //class for all cards with img, h2 and p
  const cardContent = 'cardContent'

  const content = {
    dog1: {
      h2: 'WORKOUTS',
      p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
    },
    dog2: {
      h2: 'WEIGHT LOSS',
      p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
    },
    dog3: {
      h2: 'JOGGING',
      p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
    },
    dog4: {
      h2: 'HEALTH BENEFITS',
      p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
    }
  }

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
          <div className={card}>
            <img src={dog1} alt={dog1} className={dogs} />
            <div className={cardContent}>
              <h2>{content.dog1.h2}</h2>
              <p>{content.dog1.p}</p>
            </div>
          </div>

          <div className={card}>
            <img src={dog2} alt={dog2} className={dogs} />
            <div className={cardContent}>
              <h2>{content.dog2.h2}</h2>
              <p>{content.dog2.p}</p>
            </div>
          </div>

          <div className={card}>
            <img src={dog3} alt={dog3} className={dogs} />
            <div className={cardContent}>
              <h2>{content.dog3.h2}</h2>
              <p>{content.dog3.p}</p>
            </div>
          </div>

          <div className={card}>
            <img src={dog4} alt={dog4} className={dogs} />
            <div className={cardContent}>
              <h2>{content.dog4.h2}</h2>
              <p>{content.dog4.p}</p>
            </div>
          </div>
        </div>
      </Section2>
    </>
  );
}

export default App;
