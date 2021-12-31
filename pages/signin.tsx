import { providers, signIn, getSession } from "next-auth/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SignIn({ providers }) {
  return (
    <>
      <Navbar />
      <h1 style={{ fontFamily: "var(--alt-code-font)", fontWeight: "normal" }}>
        Sign Up / Log In
      </h1>
      <div className="signin">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              <img src="/static/google.png" height={"40px"} />
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await providers(),
    },
  };
}
