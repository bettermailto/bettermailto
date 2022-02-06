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
      <h3>Still have questions? Contact us at support@bettermailto.com.</h3>
      <h2>
        <a style={{ color: "initial" }} href="/">
          Click here to go back to the home page.
        </a>
      </h2>
      <Footer />
    </>
  );
};

export default fiveohfive;
