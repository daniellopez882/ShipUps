import { Lato } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato();

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
