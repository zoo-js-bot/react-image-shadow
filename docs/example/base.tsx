/**
 * desc: Basic display.
 */

import React from 'react';
import ImageShadow from 'react-image-shadow';
import './demo.less';
import '../../assets/shadow-hover.less';

const App = () => {
  return (
    <div className="base-demo">
      <ImageShadow
        width="300"
        src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/red.png?raw=true"
      ></ImageShadow>
      <ImageShadow
        width="300"
        src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/blue.jpg?raw=true"
      ></ImageShadow>
      <ImageShadow
        shadowRadius={20}
        width="300"
        src="https://github.com/xrkffgg/react-image-shadow/blob/main/image/white.jpg?raw=true"
      ></ImageShadow>
    </div>
  );
};

export default App;
