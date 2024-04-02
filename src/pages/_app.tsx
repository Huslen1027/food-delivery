import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FoodContextProvider } from "@/components/Context/FoodContext";
import { CartContextProvider } from "@/components/Context/CartContext";
import Head from "next/head";
const theme = createTheme({
  palette: {
    primary: {
      main: "#18BA51",
    },
  },
});
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CartContextProvider>
      <FoodContextProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            <Head>
              <title>Food Delivery</title>
              <meta name="description" content="Generated by create next app" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/logo.svg" />
            </Head>
          </Layout>
        </ThemeProvider>
      </FoodContextProvider>
    </CartContextProvider>
  );
};

export default App;
