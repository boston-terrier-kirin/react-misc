import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Page1DetailA = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(location.state);

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};

export default Page1DetailA;
