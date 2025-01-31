import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* 모든 페이지에 적용될 헤더 */}
      <Component {...pageProps} />
    </>
  );
}
