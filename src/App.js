import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  function navigateToCurrency() {
    
      navigate("/c");
    
  }
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
        <button className='btn' onClick={navigateToCurrency}>Currency</button>

        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/7DJY0fQ-s38`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Wedding invite"
          />
        </div>
        <ul>
          <li>
            <strong>Engagement</strong>
            <p>15 Sep 2024 (6PM onwards) - Hotel Mayas, Trichy.</p>
          </li>
          <li>
            <strong>Marriage</strong>
            <p>16 Sep 20224 (5AM - 6AM) - Jambukeswarar Temple, Thiruvanaikaval, Trichy</p>

            <p>16 Sep 20224 (6AM onwards) - Hotel Mayas, Trichy.</p>
          </li>
          <li>
            <strong>Reception</strong>
            <p>16 Sep 2024 (6PM onwards) - Hotel Oriental Towers, Thanjavur</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
