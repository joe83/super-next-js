import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps }
  }

  render () {
    return (<html>
      <Head>
        <title>Super Next</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>)
  }
}
