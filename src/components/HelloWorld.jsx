import React from 'react';
import '@styles/HelloWorld.less';
import icon from '@images/icon.svg';
import SvgIcon from '@components/SvgIcon';

export default function HelloWorld(props) {
  return (
    <div className="red">
      <SvgIcon symbol={icon} viewBox="0 0 20 20" />
    </div>
  );
}