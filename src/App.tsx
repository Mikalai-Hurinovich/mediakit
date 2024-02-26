import Link from "./components/Link";
import './App.css';
import Logo from '../public/assets/images/icons/logo.svg';
import Cross from '../public/assets/images/icons/cross.svg?react';

function App() {
    return (
        <div className="background">
            <div className="wrapper">
                <header>
                    <a href="https://bcsports.io/">
                        <img className="logo" src={Logo}
                             alt="blockchain sports logo"/></a>
                    <div className="label">media kit</div>
                </header>
                <main className="main">
                    <Link text="identity"
                          href="https://drive.google.com/drive/folders/1WBVKgXn1UH4P2MXrtTcDyKuh5G8WU0Vm?usp=drive_link"/>
                    <Link text="photo"
                          href="https://drive.google.com/drive/folders/1VHvnQ5g9mdL7D7tl5X_f8UTdw11Nw1aV?usp=drive_link"/>
                    <Link text="video"
                          href="https://drive.google.com/drive/folders/10OghIsAdAVNb869Ayc9BA7o4ZnadZEj3?usp=drive_link"/>
                </main>
                <footer className="footer">
                    <div>
                        <Cross className="cross"/>
                        <Cross/>
                    </div>
                    <Cross/>
                </footer>
            </div>
        </div>
    );
}

export default App;
