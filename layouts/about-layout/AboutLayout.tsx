import { Header } from "../../components/text/Text";
import { Layout } from "../layout/Layout";

export const AboutLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout
    pageHeader={<Header margin={"0em 0em 1em 0em"}>About</Header>}
    layout="about"
  >
    {children}
  </Layout>
);
