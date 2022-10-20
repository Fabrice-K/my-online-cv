type BusinessSolutionItemProps = {
  title: string;
  body: string;
}

const BusinessSolutionItem = ({ title, body }: BusinessSolutionItemProps) => {

  return (
    <article>
      <h1>{title}</h1>
      <div>{body}</div>
    </article>
  );
};

export default BusinessSolutionItem;