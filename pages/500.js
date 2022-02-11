import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fiveohfive = () => {
  return (
    <>
      <Navbar />
      <h1>Oops! Sorry, but something went wrong.</h1>
      <h2>
        If you tried to access a person's bettermailto URL, it's probably
        invalid. Try asking them for the URL again.
      </h2>
      <h3>
        Still have questions?{" "}
        <a href="https://www.bettermailto.com/user/620361d125b19f0009aa2caa">
          Contact us
        </a>
        .
      </h3>
      <Footer />
    </>
  );
};

export default fiveohfive;
