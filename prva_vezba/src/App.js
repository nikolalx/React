import { useState } from 'react';

import './App.scss';
import Heading from './components/Heading/Heading'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2';
import Button from './components/Button/Button';
import InputHandler from './components/InputHandler/InputContainer';
import Rate from './components/Rating/Rating';
import CommentSection from './components/CommentSection/CommentSection';

import img from './/images/img.png'
import svg from './/images/svg.svg'

const stateChanger = (height, text, setHeight, setText) => {
  if(height === '0') {
    setHeight('550px')
    setText('Collapse Comment Section')
  } else {
    setHeight('0')
    setText('Expand Comment Section')
  }
}

const ratingChanger = (rate, setRating) => {

}


function App() {

  const [height, setHeight] = useState('0')
  const [buttonText, setText] = useState('Expand Comment Section')

  const [star1, setRating1] = useState('none')
  const [star2, setRating2] = useState('none')
  const [star3, setRating3] = useState('none')
  const [star4, setRating4] = useState('none')
  const [star5, setRating5] = useState('none')

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
            <Section2 classNames={'jas'} />
          </div>
        </section>

        <section className='section3' >
          <Button classNames={'button'} value={buttonText} onClick={() => {stateChanger(height, buttonText, setHeight, setText)}} />
          <div className='card' style={{height: height}}>

            <InputHandler classNames={'nameContainer'} />

            <div className={'starsContainer'}>
            <Rate classNames={'stars'} style={{fill: star1}} onClick={() => {star1 === 'none' ? setRating1('gold') : setRating1('none')}} />
            <Rate classNames={'stars'} style={{fill: star2}} onClick={() => {star2 === 'none' ? setRating2('gold') : setRating2('none')}} />
            <Rate classNames={'stars'} style={{fill: star3}} onClick={() => {star3 === 'none' ? setRating3('gold') : setRating3('none')}} />
            <Rate classNames={'stars'} style={{fill: star4}} onClick={() => {star4 === 'none' ? setRating4('gold') : setRating4('none')}} />
            <Rate classNames={'stars'} style={{fill: star5}} onClick={() => {star5 === 'none' ? setRating5('gold') : setRating5('none')}} />
            </div>

            <div className='commentContainer'>
              <CommentSection classNames={'comment'} />
              <div className='resetSubmitContainer'>
                <Button classNames={'reset'} value={'Reset'} />
                <Button classNames={'submit'} value={'Submit'} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
