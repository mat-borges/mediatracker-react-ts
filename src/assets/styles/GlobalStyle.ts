import { accentColor, darkMainColor, darkSecondaryColor, fontColor } from '../../constants/colors';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

*{
	box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
	::-webkit-scrollbar {
		width: 0.3em;
	}
	::-webkit-scrollbar-track {
		background: ${darkMainColor};
	}
	::-webkit-scrollbar-thumb {
		max-height: 50%;
		border-radius: 5px;
		background: ${darkSecondaryColor};
		:hover {
			background: ${accentColor};
		}
	}
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	color: ${fontColor};
	font-size: 16px;
	line-height: 1.2;
	font-family: 'Nunito Sans', sans-serif;
	background-color: ${darkMainColor};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
