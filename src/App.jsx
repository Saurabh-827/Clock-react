import ClockHead from "./components/ClockHead";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <center>
            <ClockHead></ClockHead>
            <ClockSlogan></ClockSlogan>
            <CurrentTime></CurrentTime>
        </center>
    );
}
export default App;