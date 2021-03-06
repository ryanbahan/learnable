import React from 'react'
import NextDocument from 'next/document'
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Take control over your learning content with powerful tools to organize and motivate. Transform your bookmarks into actual learning sessions."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="canonical" href="https://learnable-fe.now.sh/" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Learnable" />
          <meta
            property="og:description"
            content="Take control over your learning content with powerful tools to organize and motivate. Transform your bookmarks into actual learning sessions."
          />
          <meta property="og:url" content="https://learnable-fe.now.sh/" />
          <meta property="og:site_name" content="Learnable" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
