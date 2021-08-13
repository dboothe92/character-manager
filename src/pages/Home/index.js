import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <Link className="login-signup" to="/login">Login</Link>
            <Link className="login-signup" to="/signup">Sign Up</Link>

            <p className="home-description">
                Welcome to the last character manager you'll ever need!
            </p>
            <p className="home-edition">
                Currently servicing Dungeons and Dragons 5E
            </p>
        </section>
    );
};

export default Home;