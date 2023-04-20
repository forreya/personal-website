import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>Hello there</span>
        <Link href="/">Made by Ryan Lai</Link>
        <Link href="/">This is my website</Link>
      </Layout>
    </footer>
  );
}
 
export default Footer;