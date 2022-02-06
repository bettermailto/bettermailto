import { providers, signIn, getSession } from "next-auth/client";
import { getCsrfToken } from "next-auth/client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SignIn({ providers, csrfToken }) {
  return (
    <>
      <Navbar />
      <h1 style={{ fontFamily: "var(--alt-code-font)", fontWeight: "normal" }}>
        Sign Up / Log In
      </h1>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="label-div">
          <label>Email address</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Sign in with Email</button>
        <h2>or</h2>
      </form>
      <div className="signin">
        {Object.values(providers).map((provider) => (
          /* @ts-ignore */
          <div key={provider.name}>
            {/* @ts-ignore */}
            <button onClick={() => signIn(provider.id)}>
              <img src="/static/google.png" height={"40px"} />
              {/* @ts-ignore */}
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center" }}>
        By signing up, you agree with bettermailto.com's{" "}
        <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const csrfToken = await getCsrfToken(context);

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await providers(),
      csrfToken,
    },
  };
}
