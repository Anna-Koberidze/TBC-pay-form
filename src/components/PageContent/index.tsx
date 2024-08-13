import CardContainer from "../CardContainer";
import FormContainer from "../FormContainer";

interface PageContentProps {
  isFormContainerOpen: boolean;
  setIsFormContainerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const PageContent: React.FC<PageContentProps> = ({
  isFormContainerOpen,
  setIsFormContainerOpen,
}) => {
  return (
    <>
      {isFormContainerOpen ? (
        <FormContainer {...{ setIsFormContainerOpen }} />
      ) : (
        <CardContainer {...{ setIsFormContainerOpen }} />
      )}
    </>
  );
};
export default PageContent;
