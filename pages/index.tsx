import { IconsRow } from "../components/icons";
import IndexLayout from "../layout/IndexLayout";
import Head from "next/head"

const IndexPage = () => (
  <>
    <Head>
      <title>Raj Shah</title>
    </Head>
    <IndexLayout>

      <h1>Hi, I&apos;m Raj</h1>

      <h2>I am a software engineer who specializes in building large-scale web services, high-quality APIs and robust data pipelines. I am currently a full-stack engineer at Stripe building tools and services which help safeguard Stripe and its customers from frauds and losses.</h2>

      <h3>Before joining Stripe, I worked at Microsoft for 4 years, where I worked on APIs and systems to help customers manage their Azure subscriptions, and monitor their costs and billing.</h3>

      <h4>I am also interested in the world of financial markets, football (the one that you play with your foot) and chess.</h4>

      <IconsRow />
    </IndexLayout>
  </>
);
IndexPage.displayName = 'Index';
export default IndexPage;
