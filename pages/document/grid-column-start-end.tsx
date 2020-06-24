import doc from "components/doc";
import Layout from "./Layout";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Grid Column Start / End</h1>
        <p className={doc.p}>grid-col 是一个组合，我们支持 -2~12 的复合，如：col-5-6, col--2-12, col-12--2 </p>
        <table className="w-12/12 table-fixed">
          <thead>
            <tr>
              {["Class", "Properties"].map((v) => {
                return (
                  <th key={v} className={doc.th}>
                    {v}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[
              [`col-auto`, `grid-column: auto`],
              [`col-none`, `grid-column: none`],
              ['下列参数 ? 指 -2 至 12', ''],
              [`col-?-?`, `grid-column: span ? / span ?;`],
              [`col-auto-?`, `grid-column: span auto / span ?;`],
              [`col-?-auto`, `grid-column: span ? / span auto;`],
            ].map((item, a) => {
              return (
                <tr key={a}>
                  {item.map((v, i) => {
                    return (
                      <td key={i} className={doc.td}>
                        {v}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <DocumentTry />
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
