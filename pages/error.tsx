import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const error = () => {
  return (
    <>
      <Navbar />
      <h1>Oops! Sorry, but something went wrong.</h1>
      <h2>Please try signing in again.</h2>
      <h3>
        If this error still persists, contact us at{" "}
        <a href="https://www.bettermailto.com/user/620361d125b19f0009aa2caa">
          support@bettermailto.com
        </a>
        .
      </h3>
      <Footer />
    </>
  );
};

export default error;
