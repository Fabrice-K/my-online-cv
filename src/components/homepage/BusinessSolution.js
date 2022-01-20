import BusinessSolutionItem from "./BusinessSolutionItem";

import styles from './BusinessSolution.module.scss';

const BusinessSolution = ({ title, descrition }) => {

  return (
    <section className={styles.container}>
      <h1>Nos solutions business</h1>
      <div>Description détaillé</div>

      <BusinessSolutionItem />
    </section>
  );
};

export default BusinessSolution;