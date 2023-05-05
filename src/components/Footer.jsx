import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    font-medium text-lg xl:text-sm sm:text-base h-full text-dark p-0">
      <Layout className="py-8 flex items-center justify-between xl:!px-14 xl:!py-8 md:flex-col md:!py-2">
          <span className="">Website developed by <Link href='https://github.com/forreya' target="_blank" className="hover:text-muddier">@forreya</Link></span>
          <Link href={"https://github.com/forreya/personal-website"} target="_blank" className="hover:text-muddier">Click Here for Source Code</Link>
      </Layout>
    </footer>
  );
}

export default Footer;