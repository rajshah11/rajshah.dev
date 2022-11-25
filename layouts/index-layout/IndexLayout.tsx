import { Text } from "../../components/";
import { Layout } from "../layout/Layout";

export const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  const header = (
    <div>
      <Text.Header margin={"0"}>Code.&nbsp;</Text.Header>
      <Text.Header margin={"0"}>Life.&nbsp;</Text.Header>
      <Text.Header margin={"0em 0em 1em 0em"}>Everything else.</Text.Header>
    </div>
  );
  return (
    <Layout pageHeader={header} layout="index">
      {children}
    </Layout>
  );
};
