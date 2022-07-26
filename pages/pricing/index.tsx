import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1>Page Pricing</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/pricing/index.jsx</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};