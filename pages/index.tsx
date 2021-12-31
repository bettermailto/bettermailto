import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import { useSession } from "next-auth/client";
import clientPromise from "../mongodb";

export async function getServerSideProps() {
  const client = await clientPromise;

  const db = client.db("bettermailto-auth");

  let users = await db.collection("users").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}

const Home = ({ users }) => {
  const [session, loading] = useSession();

  if (loading) {
    return null;
  }

  if (session) {
    const index = users.findIndex((user) => user.name === session.user?.name);
    const uniqueId = users[index]._id;
    return (
      <>
        <Navbar />
        <h1>Good to see you, {session.user?.name}!</h1>
        <div className="email-div">
          <p>
            Your better<span>mailto</span> link is:
          </p>
        </div>
        <div className="email-div">
          <p>
            <div id="email">
              <a
                href={
                  "localhost:3000/user/" +
                  session.user.name.toLowerCase().replace(" ", "-") +
                  "-" +
                  uniqueId
                }
              >
                {"https://bettermailto.com" +
                  "/user/" +
                  session.user.name.toLowerCase().replace(" ", "-") +
                  "-" +
                  uniqueId}
              </a>
              <span
                id="copy-pseudodiv"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "localhost:3000/user/" +
                      session.user.name.toLowerCase().replace(" ", "-") +
                      "-" +
                      uniqueId
                  );
                }}
              >
                <span
                  id="copy"
                  onClick={() => {
                    document.getElementById("copy").innerText = "Copied";
                    setTimeout(function () {
                      document.getElementById("copy").innerText = "Copy";
                    }, 3000);
                  }}
                >
                  Copy
                </span>
              </span>
            </div>
            <span
              id="copy-pseudodiv"
              onClick={() => {
                navigator.clipboard.writeText(
                  "localhost:3000/user/" +
                    session.user.name.toLowerCase().replace(" ", "-") +
                    "-" +
                    uniqueId
                );
              }}
            >
              <span
                id="copymobile"
                onClick={() => {
                  document.getElementById("copymobile").innerText = "Copied";
                  setTimeout(function () {
                    document.getElementById("copymobile").innerText = "Copy";
                  }, 3000);
                }}
              >
                Copy
              </span>
            </span>
          </p>
        </div>
        <h1 style={{ marginTop: "2em" }}>Try it out now!</h1>
        {/* @ts-ignore */}
        <Providers email={session.user?.email} subject="" />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <h1>
          The no-code replacement for <code>mailto</code>.
        </h1>
        <h2>
          Create a link to share your email safely and allow others to choose
          their preferred email provider.
        </h2>
        <h3>Try it now, send us a test email and we'll reply back!</h3>
        {/* @ts-ignore */}
        <Providers subject="Test" />
        <div className="about-flexbox">
          <div className="about">
            <h1 id="about">About</h1>
            <p>
              HTML's <code>mailto</code>{" "}
              <a href="https://datatracker.ietf.org/doc/html/rfc1738">
                has existed since 1994
              </a>
              , and after {new Date().getFullYear() - 1994} years, it has not
              held up well.
            </p>
            <p>
              Using <code>mailto</code> is a gateway for email harvesters. They
              are also annoying for users who have not set a default mail
              provider.
            </p>
            <p>
              bettermailto gives you a no-code alternative to all of this.{" "}
              <a href="/signup">Sign up now</a>.
            </p>
          </div>
          <div className="about-code">
            <code>
              &lt;<span style={{ color: "red" }}>a</span>{" "}
              <span style={{ color: "yellow" }}>href</span>
              <span style={{ color: "orange" }}>=</span>
              <span style={{ color: "lime" }}>
                "mailto:test@bettermailto.com"
              </span>
              &gt;&lt;/
              <span style={{ color: "red" }}>a</span>&gt;
            </code>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
