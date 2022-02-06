import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer>
      &copy; <span>{new Date().getFullYear()}</span> better
      <span>
        mailto, All Rights Reserved.{" "}
        <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>
      </span>
    </footer>
  );
};

export default Footer;
