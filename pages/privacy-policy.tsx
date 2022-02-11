import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const privacypolicy = () => {
  return (
    <>
      <Navbar />
      <h1>Privacy Policy</h1>
      <h3 style={{ marginLeft: "20%", marginRight: "20%" }}>
        At bettermailto.com, we take privacy very seriously. Please take a
        minute to read and understand what information we collect from you when
        you use our services.
      </h3>
      <div style={{ fontSize: "1.2rem", padding: "1.2em" }}>
        <h3 style={{ textAlign: "left" }}>
          What information does bettermailto.com collect from users and where is
          it stored?
        </h3>
        <p>
          For generating bettermailto-owned user URL's, we store the user's
          email, their name and any profile picture (if applicable) on a
          database hosted in Virginia, the United States of America.
        </p>
        <p>
          If you choose to provide bettermailto.com with the aforementioned
          information, you consent to the transfer and storage of that
          information on the aforementioned database in the aforementioned
          location.
        </p>
        <p>
          The information we collect is used to improve the content of our web
          pages and the quality of our service and is never shared with or sold
          to other organizations for commercial purposes, except to provide
          products or services you've requested, when we have your permission,
          or if it is necessary to share information in order to investigate,
          prevent, or take action regarding illegal activities, suspected fraud,
          situations involving potential threats to the physical safety of any
          person, violations of our Terms of Service, or as otherwise required
          by law.
        </p>
        <h3 style={{ textAlign: "left" }}>Cookies</h3>
        <p>
          A cookie is a small amount of data, which often includes an anonymous
          unique identifier, that is sent to your browser from a web site's
          computers and stored on your computer's hard drive.
        </p>
        <p>
          Cookies are required to use our service. We use cookies to record
          current session information and to make it easier for you to access
          our services after time has elapsed.
        </p>
        <h3 style={{ textAlign: "left" }}>reCAPTCHA</h3>
        <p>
          bettermailto.com makes use of Google reCAPTCHA v3 to verify users are
          human and to protect users emails from bots. reCAPTCHA v3 is used at
          the moment of clicking any of the email providers provided by
          bettermailto.com. Please note that{" "}
          <a href="https://policies.google.com/privacy">
            Google's Privacy Policy{" "}
          </a>
          applies on bettermailto.com (also see{" "}
          <a href="https://policies.google.com/terms">
            Google's Terms and Services
          </a>
          , which all also apply on bettermailto.com).
        </p>
        <h3 style={{ textAlign: "left" }}>Data storage</h3>
        <p>
          bettermailto.com uses third party vendors and hosting partners to
          provide the necessary hardware, software, networking, storage, and
          related technology required to run bettermailto.com and our services.
        </p>
        <p>
          Although bettermailto.com owns the code, databases, and all rights to
          the bettermailto.com website, you retain all rights to your data.
        </p>
        <h3 style={{ textAlign: "left" }}>Disclosure</h3>
        <p>
          bettermailto.com may disclose personally identifiable information
          under special circumstances, such as to comply with subpoenas or when
          your actions violate the Terms of Service.
        </p>
        <h3 style={{ textAlign: "left" }}>Changes</h3>
        <p>
          We may periodically update this policy. We will notify you about
          significant changes in the way we treat personal information by
          sending a notice to the email specified in your bettermailto.com
          account holder or by placing a prominent notice on our site.
        </p>
        <p>
          You may{" "}
          <a href="https://www.bettermailto.com/user/620361d125b19f0009aa2caa">
            contact us
          </a>{" "}
          in case of any questions or concerns or if you want to request your
          account and your information to be deleted from our databases.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default privacypolicy;
