import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    font-medium text-lg sm:text-base h-full p-0">
      <Layout className="py-8 flex items-center justify-between xl:!py-8 lg:flex-col lg:!py-2 md:!py-3">
          <span className="">Website developed by <Link href='https://github.com/forreya' target="_blank" className="hover:underline">@forreya</Link></span>
          <Link href={"https://github.com/forreya/personal-website"} target="_blank" className="hover:underline">Click Here for Source Code</Link>
      </Layout>
    </footer>
  );
}

export default Footer;