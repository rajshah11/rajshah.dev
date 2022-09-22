import { IconsRow } from "../components/icons";
import IndexLayout from "../layout/IndexLayout";
import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>Raj Shah</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
      <link rel="manifest" href="/public/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
    </Head>
    <IndexLayout>

      <h1>Hi, I'm Raj</h1>

      <h2>I am a software engineer who specializes in building large-scale web services, high-quality APIs and robust data pipelines. I am currently a full-stack engineer at Stripe building tools and services which help safeguard Stripe and its customers from frauds and losses.</h2>

      <h3>Before joining Stripe, I worked at Microsoft for 4 years, where I worked on APIs and systems to help customers manage their Azure subscriptions, and monitor their costs and billing.</h3>

      <h4> I am also interested in the world of financial markets, football (the one that you play with your foot) and chess.</h4>

      <IconsRow />
    </IndexLayout>
  </>
);
