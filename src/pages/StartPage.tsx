import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/question');
  };
  return (
    <div className="start-page">
      <header className="start-header">
        <h1>好きなアイスで性格診断</h1>
        <p>好きなアイスを選んで、あなたの性格を診断しよう！</p>
      </header>

      <main className="start-content">
        <button className="start-button" onClick={handleStart}>
          診断を始める
        </button>
      </main>

      <footer className="start-footer">
        <p>アイスを選んで、楽しく性格診断をしましょう！</p>
      </footer>
    </div>
  );
};

export default StartPage;
