import React from 'react';
// 必须传递src/assets/images目录中的svg文件才可以
export default function SvgIcon({ symbol, viewBox }) {
  return (
    <svg viewBox={viewBox || symbol.viewBox}>
      <use xlinkHref={'#' + symbol.id} />
    </svg>
  );
}

