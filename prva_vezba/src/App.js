import './App.scss';
import Heading from './components/Heading/Heading'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2';
// import Main from './components/Main/Main'
import img from './/images/img.png'
import svg from './/images/svg.svg'

//running dogs
// import dog1 from './/images/dog1.jpg'
// import dog2 from './/images/dog2.jpg'
// import dog3 from './/images/dog3.jpg'
// import dog4 from './/images/dog4.jpg'


function App() {

  // const running = 'Running and jogging'
  // const dogs = 'dogs'//class for all running dog images
  // const card = 'card' //class for all cards with img, h2 and p
  // const cardContent = 'cardContent'

  // const content = [
  //   { h2: 'WORKOUTS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog1 },
  //   { h2: 'WEIGHT LOSS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog2 },
  //   { h2: 'JOGGING', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog3 },
  //   { h2: 'HEALTH BENEFITS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog4 }
  // ];



  return (
    <>
      <Heading classNames={'heading'}>
        <img src={img} alt={img} />
        <img src={svg} alt={img} className='svg' />
      </Heading>
      <div className='main'>
        <Section1 classNames={'section1'} />

        <section className={'section2'}>
        <h1>{'Running and Jogging'}</h1>
          <div className={'bigCard'}>
            <Section2 classNames={'jas'}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
