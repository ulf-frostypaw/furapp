/*
 - TODO:
 -- AÑADIR DOCUMENTACIÓN DE LA LIBRERÍA
 -- ACTUALIZAR LIBRERIA BBCODE
 -- LINK: https://github.com/JimLiu/bbcode-to-react
*/

import React from 'react';
import parser from 'bbcode-to-react';
//import { renderToString } from 'react-dom/server';

const ReaderJournal = ({JournalContent}) => {
    return(
        <>{parser.toReact(JournalContent)}</>
    );
}
export default ReaderJournal;