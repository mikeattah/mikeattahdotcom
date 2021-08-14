import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout.js";

export default function Home({ title, description, ...props }) {
  return (
    <Layout pageTitle={title} pageDescription={description}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi I&apos;m <span>Mike!</span>
          </h1>
          <h3 className={styles.description}>a frontend developer</h3>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
