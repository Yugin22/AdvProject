// pages/_app.tsx
import "@/styles/globals.css"; // Your global styles
import type { AppProps } from "next/app";
import { MyProvider } from "../components/myContext"; // Adjust the path as needed

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
