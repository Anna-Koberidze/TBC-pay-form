import useStore from "../store/useStore";
import CardContainer from "./CardContainer";
import FormContainer from "./FormContainer";

const PageContent: React.FC = () => {
  const { isFormContainerOpen } = useStore();
  return <>{isFormContainerOpen ? <FormContainer /> : <CardContainer />}</>;
};
export default PageContent;
