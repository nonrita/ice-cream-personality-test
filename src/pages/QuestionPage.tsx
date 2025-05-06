import { useNavigate } from 'react-router-dom';

const iceCreamOptions = [
  { id: 'vanilla', label: 'バニラ' },
  { id: 'chocolate', label: 'チョコレート' },
  { id: 'strawberry', label: 'ストロベリー' },
  { id: 'matcha', label: '抹茶' },
];

const QuestionPage = () => {
  const navigate = useNavigate();

  const handleSelection = (flavorId: string) => {
    // 選択されたアイスの種類を結果ページに渡す
    navigate('/result', { state: { selectedFlavor: flavorId } });
  };
  return (
    <div className="question-page">
      <h2 className="question-title">好きなアイスの種類は？</h2>
      <div className="options-container">
        {iceCreamOptions.map((option) => (
          <button
            key={option.id}
            className="option-button"
            onClick={() => handleSelection(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
