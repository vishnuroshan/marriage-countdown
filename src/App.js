import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';

function App() {
  return (
    <main className="container">
      <div className="center">
        <div className='countdown'>
          <FlipClockCountdown className='clock' to={new Date('September 16, 2024 05:00:00').getTime()}
            labels={['Days', 'Hours', 'Minutes', 'Seconds']}
          >
            I am married!
          </FlipClockCountdown>
        </div>

        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/7DJY0fQ-s38`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Wedding invite"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
