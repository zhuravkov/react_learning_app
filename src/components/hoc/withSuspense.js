import React from 'react';

import Preloader from '../common/Preloader';


export const withSuspense = (Component) => {
    return (
        // Отобразится <Preloader> до тех пор, пока не загрузится <OtherComponent />
        <React.Suspense fallback={<Preloader />}>
          <div>
            <Component />
          </div>
        </React.Suspense>
    );
    }
