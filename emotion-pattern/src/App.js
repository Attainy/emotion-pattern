import './App.css';
import EmotionBar from './components/EmotionBar';

function App() {
  const emotionList = ['기쁨', '슬픔', '우울', '분노', '짜증', '즐거움'];

  const emotionValueSubmit = (emotionData) => {
    
  };

  return (
    <div className="App">
      {
        emotionList.map((emotion) => (
          <EmotionBar emotionName={emotion}/>
        ))
      }
    </div>
  );
}

export default App;
