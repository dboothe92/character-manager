const Login = () => {
    return (
        <section>
            <form>
                <div>
                    <label htmlFor="login-username">Username:</label>
                    <input type="text" id="login-username" required />
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" id="login-password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    )
};

export default Login;

