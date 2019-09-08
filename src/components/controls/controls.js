import React from 'react';
import s from './_controls.scss';

export default () =>(
    <div className={s.container}>
        <div className={s.row__left}>
            {helpButton}
        </div>
        <div className={s.row__right}>
            <div className={s.emoticon}>
                <div className={s.arrow}>
                    {leftArrowSvg}
                </div>
                <div>
                    ✋
                </div>
            </div>
            <div className={s.volume}>
                {volumeSvg}
            </div>
            <div className={s.microphone}>
                {microphoneSvg}
            </div>
            <div className={s.column}>
                <div className={s.message}>
                    {messageSvg}
                </div>
                <div className={s.screen}>
                    {screenSvg}
                </div>
                <div className={s.camera}>
                    {cameraSvg}
                </div>
            </div>
        </div>

    </div>
);

const questionSvg = (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
        <path
            d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
    </svg>
);

const helpButton = (
    <div className={s.question}>
        {questionSvg}
    </div>
);

const leftArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
         data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img"
         viewBox="0 0 256 512">
        <path fill="currentColor"
              d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/>
    </svg>
);


const volumeSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);

const microphoneSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/></svg>
);

const cameraSvg = (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"/></svg>
);

const screenSvg = (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M23 16c0 1.1-.9 2-2 2h-1l-2-2h3V4H6L4 2h17c1.1 0 2 .9 2 2v12zm-5.5 2l-2-2zm-2.6 0l6 6 1.3-1.3-4.7-4.7-2-2L1.2 1.8 0 3.1l1 1V16c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h.9zM3 16V6.1l9.9 9.9H3z"/></svg>
);

const messageSvg = (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);