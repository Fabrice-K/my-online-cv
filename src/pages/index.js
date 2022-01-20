import BusinessSolution from "../components/homepage/BusinessSolution";
import Hero from "../components/homepage/Hero";

const HomePage = () => (
  <div>
    <Hero />
    <BusinessSolution />
  </div>
);

export async function getStaticProps() {

  
}

export default HomePage;