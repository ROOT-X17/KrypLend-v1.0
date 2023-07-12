import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const SignupPage = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className="--center-all">
            <h1>Create an Account</h1>
            {/* Your signup form goes here */}
            <form>
              <input type="text" placeholder="Username" />
              <br/>
              <input type="email" placeholder="Email" />
              <br/>
              <input type="password" placeholder="Password" />
              <br/>
              <button className="--btn --btn-primary" type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link href="/login">Log in</Link></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupPage;
