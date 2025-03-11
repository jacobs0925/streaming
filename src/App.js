import './App.css';
import VideoPlayer from './components/VideoPlayer';
const videoUrl = "https://director.taihotel.asia/v4/variant/VE1gTdz0mLzRnLv52bt9SMhFjdtM3ajFmc09iZyETMlFWYiFmY4ETL1MzM50CMkBDNtMmNwMTLwYGM0gjYllzL.m3u8";
function App() {
  return (
    <div className="App">
          <div>
              <h1>Live Stream</h1>
              <VideoPlayer src={videoUrl} />
          </div>
    </div>
  );
}

export default App;
