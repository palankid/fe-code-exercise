import { css } from 'styled-components';

import interRegular from './Inter-Regular.woff2';
import interMedium from './Inter-Medium.woff2';
import interSemiBold from './Inter-SemiBold.woff2';
import interBold from './Inter-Bold.woff2';

const fontFaces = css`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${interRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${interMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${interSemiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${interBold}) format('woff2');
  }
`;

export default fontFaces;
