import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang='en'>
			<Head>
				<meta name='description' content='carpetdiem store' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
