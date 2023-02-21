import data from "../data/weeds.json";
import styles from "../styles/Weeds.module.css";

export default function Weeds() {
  return (
    <div>
      <h1>Learn About Weeds!</h1>
      <p>Click on the table headers to sort the table.</p>
      <table className={styles.table} id="mytable">
        <tr className={styles.tr}>
          <th className={styles.th}>Binomial Name</th>
          <th className={styles.th}>Family</th>
          <th className={styles.th}>Taxonomy</th>
          <th className={styles.th}>Lifeform of Weed Species</th>
          <th className={styles.th}>Biogeographical Zone</th>
        </tr>
        <tbody>
          {data.map((item, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td}>{item["binome.discoweed"]}</td>
              <td className={styles.td}>{item.family}</td>
              <td className={styles.td}>{item.taxo}</td>
              <td className={styles.td}>{item.lifeform}</td>
              <td className={styles.td}>{item.biogeo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
