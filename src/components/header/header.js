import React from 'react';
import s from  './_header.scss';

export default () => (
    <div className={s.container}>
        <div className={s.menu}>
            <button className={s.circular}>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" viewBox="0 0 448 512">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
                </svg>
            </button>
        </div>

        <div className={s.center}>
            {banner}

        </div>

        <div className={s.user}>
            {userIcon}
        </div>
    </div>
);

// Didn't find the need to create a separate file.

const banner = (<div className={s.banner}>
        <div className={s.row}>
            <div className={s.bold}>

                    Powered by

            </div>
            <div className={s.logo}>
                Remo
            </div>
        </div>
        <div className={s.row}>
            Virtual networking and events
        </div>
    </div>);

const userIcon =  (<div className={s.user}>

</div>);

const userSignal = (
    <div>

    </div>
);
