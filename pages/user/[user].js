import Providers from "../../components/Providers.js";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import clientPromise from "/mongodb";

export async function getServerSideProps() {
  const client = await clientPromise;

  const db = client.db("bettermailto-auth");

  let users = await db.collection("users").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}

export default function User({ users }) {
  const router = useRouter();
  const userQuery = router.query;
  const idResults = [];

  users.map((user) => {
    idResults.push(user._id == Object.values(userQuery)[0]);
  });

  if (idResults.includes(true)) {
    const index = users.findIndex(
      (user) => user._id === Object.values(userQuery)[0].match(/\s*[^-]+$/)[0]
    );

    return (
      <>
        <Navbar />
        <div className="email-div">
          <h1 style={{ fontWeight: "normal" }}>
            Email the way you want with to better
            <span style={{ bottom: 0.8, fontSize: 33.8 }}>mailto</span>!
          </h1>
          <Providers email={users[index].email} subject="" />
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <h1>Oops! Sorry, but that user doesn't exist.</h1>
        <h2>
          <a href="/">Click here to go back to the home page.</a>
        </h2>
        <Footer />
      </>
    );
  }
}
