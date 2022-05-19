import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./thema"

import "../styles/index.css"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>えぺとも</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
