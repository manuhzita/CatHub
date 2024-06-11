import { Uploader } from 'rsuite';
import React from 'react';
import '../CatBotas/style.css'
function Upload() {
    return (
        <Uploader className='uploader' action="//jsonplaceholder.typicode.com/posts/" draggable>
            <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' , flexDirection: 'colunm'}}>
                <span>Clique ou arraste o seu vídeo de gatinho :)</span>
            </div>
        </Uploader>
    );
};

export default Upload;