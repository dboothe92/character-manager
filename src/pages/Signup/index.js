const Signup = () => {
    return (
        <section>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="signup-username">Username:</label>
                    <input type="text" id="signup-username" required />
                </div>
                <div>
                    <label htmlFor="signup-password">Password:</label>
                    <input type="password" id="signup-password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    );
};

export default Signup;