import React from 'react';
import Videos from '../../components/block/Videos';

const Video = () => {
  return (
    <div className={'w-full h-full'}>
      <Videos rtsp="rtsp://192.168.0.219/profile2/media.smp" />
    </div>
  );
};
export default Video;
