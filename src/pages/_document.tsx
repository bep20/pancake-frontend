import React from 'react'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="%REACT_APP_NODE_1%" />
          <link rel="preconnect" href="%REACT_APP_NODE_2%" />
          <link rel="preconnect" href="%REACT_APP_NODE_3%" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>PancakeSwap</title>
          <meta
            name="description"
            content="Cheaper and faster than Uniswap? Discover PancakeSwap, the leading DEX on Binance Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1" />
          <meta name="theme-color" content="#1FC7D4" />
          <meta name="twitter:image" content="https://pancakeswap.finance/images/hero.png" />
          <meta
            name="twitter:description"
            content="The most popular AMM on BSC! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="🥞 PancakeSwap - A next evolution DeFi exchange on Binance Smart Chain (BSC)"
          />
        </Head>
        <body>
          <Main />
          <div id="portal-root" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
