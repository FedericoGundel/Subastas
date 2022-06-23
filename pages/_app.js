import "bootstrap/scss/bootstrap.scss";
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.scss';
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
