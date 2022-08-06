import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar: NextPage = () => {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return null;
  }

  if (status == "authenticated") {
    return (
      <nav>
        <ul>
          <a href="/" id="logo">
            <img
              src="/static/bettermailto.png"
              height="50px"
              alt="bettermailto"
            />
          </a>
          <div>
            <ul>
              <li>
                <a
                  onClick={() =>
                    signOut({
                      callbackUrl: `${window.location.origin}`,
                    })
                  }
                >
                  Sign Out
                </a>
              </li>
            </ul>
            <a href="https://github.com/bettermailto/bettermailto">
              <img
                src="/static/github.png"
                alt="GitHub Logo"
                id="github"
                height="30px"
              />
            </a>
          </div>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul>
        <a href="/" id="logo">
          <img
            src="/static/bettermailto.png"
            height="50px"
            alt="bettermailto"
          />
        </a>
        <a href="/#about" className="mininavbar">
          <li>About</li>
        </a>
        <div>
          <ul>
            <a onClick={() => signIn()}>
              <li className="mininavbar">Sign Up</li>
              <li className="mininavbar" id="slash">
                <span>/ </span>
              </li>
              <li>
                <span>Log In</span>
              </li>
            </a>
          </ul>
          <a href="https://github.com/bettermailto/bettermailto">
            <img
              src="/static/github.png"
              alt="GitHub Logo"
              id="github"
              height="30px"
            />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
