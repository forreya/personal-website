import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    font-medium text-lg sm:text-base h-full p-0">
      <Layout className="py-8 flex items-center justify-between xl:py-8 lg:flex-col lg:py-2 md:py-3">
          <span className="">Hello there</span>
          <Link href="/" className="my-2">Made by Ryan Lai</Link>
          <Link href="/">This is my website</Link>
      </Layout>
    </footer>
  );
}

export default Footer;