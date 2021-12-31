import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer>
      &copy; <span>{new Date().getFullYear()}</span> better
      <span>mailto, All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
