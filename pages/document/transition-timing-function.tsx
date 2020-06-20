import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/transition-timing-function">
      <DocPage>
        <DocH1>float</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
