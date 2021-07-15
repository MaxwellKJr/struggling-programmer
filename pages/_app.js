import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div className="">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
