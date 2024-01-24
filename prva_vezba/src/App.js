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
  if (height === '0') {
    setHeight('550px')
    setText('Collapse Comment Editor')
  } else {
    setHeight('0')
    setText('Expand Comment Editor')
  }
}

// napraivi funkciju za set state vise od jednog odjednom.

function App() {

  const [height, setHeight] = useState('0')
  const [buttonText, setText] = useState('Expand Comment Editor')

  const [star1, setRating1] = useState(false)
  const [star2, setRating2] = useState(false)
  const [star3, setRating3] = useState(false)
  const [star4, setRating4] = useState(false)
  const [star5, setRating5] = useState(false)

  const starChanger1 = () => {
    if (star2 || star3 || star4 || star5) {
      setRating2(false)
      setRating3(false)
      setRating3(false)
      setRating4(false)
      setRating5(false)
    } else {
      setRating1(!star1)
    }
  }

  const starChanger2 = () => {
    if(star1 && star2 && !star3 && !star4 && !star5){
    setRating1(!star1)
    setRating2(!star2)
  }else if(star1 && !star2){
    setRating1(true)
    setRating2(true)
  }
   else if (star3 || star4 || star5) {
      setRating3(false)
      setRating4(false)
      setRating5(false)
    } else {
      setRating1(!star1)
      setRating2(!star2)
    }
  }

  const starChanger3 = () => {
    if (star4 || star5) {
      setRating4(false)
      setRating5(false)
      return
    }
    else if (!star1 && !star2 && !star3) {
      setRating1(!star1)
      setRating2(!star2)
      setRating3(!star3)
    } else if (star1 && star2 && star3) {
      setRating1(false)
      setRating2(false)
      setRating3(false)
    }
    else if (star1 || star2) {
      setRating1(true)
      setRating2(true)
      setRating3(true)

    }

  }

  const starChanger4 = () => {
    if (star5) {
      setRating5(false)
    } else if (!star1 && !star2 && !star3 && !star4) {
      setRating1(!star1)
      setRating2(!star2)
      setRating3(!star3)
      setRating4(!star4)
    }
    else if (star1 && star2 && star3 && star4 && !star5) {
      setRating1(false)
      setRating2(false)
      setRating3(false)
      setRating4(false)
    } else if (star1 || star2 || star3) {
      setRating1(true)
      setRating2(true)
      setRating3(true)
      setRating4(true)
    } 
  }

  const starChanger5 = () => {
    setRating1(!star1)
    setRating2(!star2)
    setRating3(!star3)
    setRating4(!star4)
    setRating5(!star5)
    if (star1 && star2 && star3 && star4 && star5) {
      setRating1(!star1)
      setRating2(!star2)
      setRating3(!star3)
      setRating4(!star4)
      setRating5(!star5)
    } else if (star1 || star2 || star3 || star4) {
      setRating1(true)
      setRating2(true)
      setRating3(true)
      setRating4(true)
    } 
  }

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
          <Button classNames={'button'} value={buttonText} onClick={() => { stateChanger(height, buttonText, setHeight, setText) }} />
          <div className='card' style={{ height: height }}>

            <InputHandler classNames={'nameContainer'} />

            <div className={'starsContainer'}>
              <Rate classNames={'stars'} style={star1 === false ? { fill: 'none' } : { fill: 'gold' }} onClick={starChanger1} />
              <Rate classNames={'stars'} style={star2 === false ? { fill: 'none' } : { fill: 'gold' }} onClick={starChanger2} />
              <Rate classNames={'stars'} style={star3 === false ? { fill: 'none' } : { fill: 'gold' }} onClick={starChanger3} />
              <Rate classNames={'stars'} style={star4 === false ? { fill: 'none' } : { fill: 'gold' }} onClick={starChanger4} />
              <Rate classNames={'stars'} style={star5 === false ? { fill: 'none' } : { fill: 'gold' }} onClick={starChanger5} />
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
