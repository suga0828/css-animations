import { FC } from 'react';

import './PreloaderPencil.css';

interface PreloaderPencilProps {
  bodyColor?: string;
}

const Stroke = () => (
  <circle
    className="stroke"
    r="70"
    stroke-dasharray="440 440"
    stroke-dashoffset="440"
  />
);

const Eraser = () => (
  <>
    <defs>
      <clipPath id="eraser">
        <rect rx="5" ry="5" width="30" height="30"></rect>
      </clipPath>
    </defs>
    <g className="eraser">
      <g className="skew">
        <rect fill="hsl(0,0%,87%)" rx="5" ry="5" width="30" height="30" />
        <rect
          fill="hsl(0,0%,60%)"
          width="5"
          height="30"
          clip-path="url(#eraser)"
        />

        <rect fill="hsl(223,10%,90%)" width="30" height="20" />

        <rect fill="hsl(223,10%,70%)" width="15" height="20" />

        <rect fill="hsl(223,10%,80%)" width="5" height="20" />

        <rect fill="hsla(223,10%,10%,0.2)" y="6" width="30" height="2" />
        <rect fill="hsla(223,10%,10%,0.2)" y="13" width="30" height="2" />
      </g>
    </g>
  </>
);

const Point = () => (
  <g className="point">
    <polygon className="wood" points="15 0,30 30,0 30" />
    <polygon className="shadow" points="15 0,6 30,0 30" />
    <polygon className="peak" points="15 0,20 10,10 10" />
  </g>
);

const Pencil: FC<PreloaderPencilProps> = (props) => {
  return (
    <svg className="pencil" viewBox={`0 0 200 200`}>
      <Stroke />
      <g className="rotate">
        <circle
          className="body-line-1"
          r="64"
          stroke-dasharray="402 402"
          stroke-dashoffset="402"
        />
        <circle
          className="body-line-2"
          r="74"
          stroke-dasharray="465 465"
          stroke-dashoffset="465"
        />
        <circle
          className="body-line-3"
          r="54"
          stroke-dasharray="339 339"
          stroke-dashoffset="339"
        />
        <Eraser />
        <Point />
      </g>
    </svg>
  );
};

export default Pencil;
