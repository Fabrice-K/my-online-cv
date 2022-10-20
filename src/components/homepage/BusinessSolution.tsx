import BusinessSolutionItem from "./BusinessSolutionItem";

import styles from './BusinessSolution.module.scss';

type BusinessSolutionProps = {
  title: string;
  description: string
}

const BusinessSolution = ({ title, description }: BusinessSolutionProps) => {

  return (
    <section className={styles.container}>
      <h1>{title}</h1>
      <div>{description}</div>

      <BusinessSolutionItem title="Abdos" body="To be tested" />
    </section>
  );
};

export default BusinessSolution;