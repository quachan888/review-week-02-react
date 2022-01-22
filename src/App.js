import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Header />
            <h1>Hello H1</h1>
            <Footer favoriteSport="Tennis" />
            <Footer favoriteSport="Swim" />
        </div>
    );
}

export default App;
