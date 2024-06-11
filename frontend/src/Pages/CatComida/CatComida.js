import React, { useState, createRef } from "react";
import '../Home/style.css';

//video player
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import video1 from '../../video/gato7.mp4';
import video2 from '../../video/gato8.mp4';
import video4 from '../../video/gato9.mp4';
import video3 from '../../video/gato10.mp4';
import video5 from '../../video/gato11.mp4';
import video6 from '../../video/gato12.mp4';

function Home() {
  const titulos = [
    "Gatinho comendo frango na rua (fofo)",
    "Gato comendo ração no chão (fofinis)",
    "Gatos comendooooo",
    "Gato preto mal encarado comendo",
    "Gatinho mt fofo comendo feijão?",
    "MUITOS gatos comendo fofissimoo"
  ];
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      poster: '',
      videoUri: video1,
    },
    {
      id: 2,
      poster: '',
      videoUri: video2,
    },
    {
      id: 3,
      poster: '',
      videoUri: video4,
    },
    {
      id: 3,
      poster: '',
      videoUri: video3,
    },
    {
      id: 3,
      poster: '',
      videoUri: video5,
    },
    {
      id: 3,
      poster: '',
      videoUri: video6,
    },
  ]


  return (
    <>
      <div>
        <h1 className="h1Tutulo" style={{ textAlign: 'center' }}>CatHub</h1>
        <div className="galeria">
          {data.map((item, index) => {
            let divRef = createRef(null);
            const openModel = () => {
              divRef.current.classList.remove('video');
              divRef.current.classList.add('model');
              setModel(true);
            }
            const closeModel = () => {
              divRef.current.classList.add('video');
              divRef.current.classList.remove('model');
              setModel(false);
            }
            return (
              <div ref={divRef} className="video" key={index}>
                <div className="video-container" onClick={() => openModel()}>
                  <Video
                    style={{ width: '100%' }}
                    autoPlay={model}
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster={item.poster}
                  ><source src={item.videoUri} type="video/webm" />
                  </Video>
                  <h5>{titulos[index]}</h5>

                </div>
              </div>
            )
          })}

        </div>
      </div>

    </>
  );
};

export default Home;

