import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Super Next</title>
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
