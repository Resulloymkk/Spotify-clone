import './style.css'
import logo from './img/logo.png'
import { useState } from "react";

function App() {

  const [bottom, setbottom] = useState(true);
  const [warning, setwarning] = useState(false);

  return (
    <div>
      <div className='panel'>
        <div className='body-side'>
          <div className='songs'>
            <h1>Focus</h1>

            <div className='song'>

              <div className='song-panel' onClick={music}>
                <div className='song-bg eminem'></div>
                <h2>Eminem</h2>
                <button>&gt;</button>
              </div>

              <div className='song-panel' onClick={music}>
                <div className='song-bg anotherlove'></div>
                <h2>Tom Odell</h2>
                <button>&gt;</button>
              </div>

              <div className='song-panel' onClick={music}>
                <div className='song-bg ganstaparadise'></div>
                <h2>Tom Odell</h2>
                <button>&gt;</button>
              </div>

              <div className='song-panel' onClick={music}>
                <div className='song-bg maskoff'></div>
                <h2>Tom Odell</h2>
                <button>&gt;</button>
              </div>


            </div>

          </div>

          <div className='songs'>
            <h1>Spotify Playlist</h1>

            <div className='song'>

              <div className='song-panel' onClick={music}>
                <div className='song-bg beggin'></div>
                <h2>Maneskin</h2>
                <button>&gt;</button>
              </div>

              <div className='song-panel' onClick={music}>
                <div className='song-bg glassanimals'></div>
                <h2>Heat Waves</h2>
                <button>&gt;</button>
              </div>

              <div className='song-panel' onClick={music}>
                <div className='song-bg lovely'></div>
                <h2>Billie Eilish</h2>
                <button>&gt;</button>
              </div>

              <div className='song-panel' onClick={music}>
                <div className='song-bg impossible'></div>
                <h2>James Arthur</h2>
                <button>&gt;</button>
              </div>
            </div>

            <div className='last-footer'>
              <div className='last-footer1'>
                <ul>
                  <h2>Company</h2>
                  <li>About</li>
                  <li>Career</li>
                  <li>For the Record</li>
                </ul>

                <ul>
                  <h2>Community</h2>
                  <li>For Artist</li>
                  <li>Develoeprs</li>
                  <li>Add</li>
                  <li>Investors</li>
                  <li>Sellers</li>
                </ul>

                <ul>
                  <h2>Local links</h2>
                  <li>Support</li>
                  <li>Free mobile application</li>
                </ul>
              </div>

              <div className='last-footer2'>
                <div className='lastfooter21'>
                  <h2>Legal</h2>
                  <h2>Privacy center</h2>
                  <h2>Privacy Polity</h2>
                  <h2>Cookies</h2>
                  <h2>About add</h2>
                </div>

                <div className='lastfooter22'>
                  <h2>@2023 Spotify AB</h2>
                </div>
              </div>

              <div className='space'></div>
            </div>
          </div>
          <div className='top-side'>
            <div className='keys'>
              <h2>&lt;</h2>
              <h2>&gt;</h2>
            </div>
            <div className='right-side'>
              <h2>Premium</h2>
              <h2>Support</h2>
              <h2>Donwload</h2>
              <h2>Sign in</h2>
              <button>Log in</button>
            </div>
          </div>
        </div>
        <div className='left-side'>
          <img src={logo} />

          <ul className='ul1'>
            <a href="" onClick={menu}><li>Home Page</li></a>
            <a href="" onClick={menu}><li>Search</li></a>
            <a href="" onClick={menu}><li>Library</li></a>
          </ul>

          <ul className='ul2'>
            <a href="" onClick={menu}><li>Create playlist</li></a>
            <a href="" onClick={menu}><li>Popular song</li></a>
          </ul>

          <ul className='ul3'>
            <a href="" onClick={menu}><li>Cookies</li></a>
            <a href="" onClick={menu}><li>Security</li></a>
          </ul>
        </div>

        {
          bottom && (
            <div className='footer'>
              <div>
                <h2>Spofiy Preview</h2>
                <h1>Sign up for unlimited access to songs, podcasts, and ads in between. no credit card needed
                </h1>
              </div>
              <div>
                <button className='Signin' onClick={signin}>Free Sign in</button>
              </div>
            </div>
          )
        }

        {
          warning && (
            <div className='warn'>
              <button id='close' onClick={close}>X</button>
              <h2>Start listening with a free Spotify account</h2>
              <div className='warn-panel'>
                <button className='freesignin' onClick={close}>Free Sign in</button><p></p>
                <button className='downlaodapp' onClick={close}>Downlaod Application</button>
                <h3>Already you have account? <a href='' onClick={close}>Log in</a></h3>
                <h3><a href='' onClick={close}>Close</a></h3>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );

  function signin() {
    setbottom(bottom => false);
  }

  function music(){
    setwarning(warning=> true);
  }

  function close(e){
    setwarning(warning=> false);

    e.preventDefault();
  }

  function menu(e){
    e.preventDefault();
  }
}

export default App;
