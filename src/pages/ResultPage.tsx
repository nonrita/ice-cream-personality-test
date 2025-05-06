import { useLocation, useNavigate } from 'react-router-dom';
import { iceCreamData } from '../utils/iceData';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedFlavor = location.state?.selectedFlavor;
  const result = selectedFlavor ? iceCreamData[selectedFlavor] : null;

  if (!result) {
    navigate('/');
    return null;
  }

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className="result-page">
      <h2 className="result-title">あなたの性格は…</h2>
      <div className="result-content">
        <h3 className="flavor-name">{result.label}</h3>
        <p className="description">{result.description}</p>
      </div>
      <button className="retry-button" onClick={handleRetry}>
        もう一度診断する
      </button>
    </div>
  );
};

export default ResultPage;
