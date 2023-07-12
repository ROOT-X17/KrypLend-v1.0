import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="--center-all">
            <h1>Login</h1>
            {/* Your login form goes here */}
            <form>
              <input type="password" placeholder="Password" />
              <br/>
              <input type="email" placeholder="Email" />
              <br/>
              <button className="--btn --btn-primary --center" type="submit">Log In</button>
            </form>
            <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
