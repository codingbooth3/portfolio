import '../src/css/Home.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  const { theme } = useContext(ThemeContext);
  const pupils = document.getElementsByClassName('pupil')

  const eyeSetter = (e) => {
    var x = e.clientX * 80 / window.innerWidth + "%";
    var y = (e.clientY * 50 / window.innerHeight) + 10 + "%";

    for (let i=0; i<2;i++) {
      pupils[i].style.left = x
      pupils[i].style.top = y
    }
  };

  return (
    <div id="homeContainer" onMouseMove={eyeSetter}>
      <div id="animationHomeContainer">
        <div id='animationContainer'>
          Hi my name is Chris Booth <br /> I am a&nbsp;
          <TypeAnimation
            key={theme}
            sequence={[
              'front-end developer.', 1500,
              'back-end developer.', 1500,
              'full-stack developer.', 1500
            ]}
            repeat={Infinity}
            style={{ color: theme === 'white' ? 'black' : 'white' }}
            className='animationText'
          />
        </div>
      </div>
      <div id="monsterContainer">
        <div id="monsterBody">
          <div className="eyesContainer">
            <div className="eye">
              <div className="pupil"></div>
            </div>
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}