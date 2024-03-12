import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [collapseState, setCollapseState] = useState({
    accessToken: false,
    refreshToken: false,
    expressJS: false,
    nestJS: false,
  });

  // Function to toggle collapse state
  const toggleCollapse = (section) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
      <div className="bg-gradient-to-b from-purple-800 to-indigo-900 text-white min-h-screen">
          <Helmet>
              <title>Job Seeking | Blogs</title>
          </Helmet>
          <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <h1 className="text-4xl font-extrabold mb-6 text-yellow-300">
                  🚀 Read And Explore... 🌐
              </h1>

              {/* Access Token Section */}
              <section className="mb-6 bg-blue-700 text-white p-4 rounded-lg shadow-lg">
                  <h2
                      className="text-xl font-bold mb-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 text-yellow-300"
                      onClick={() => toggleCollapse('accessToken')}
                  >
                      🛡️ Unraveling the Mystery of Access Tokens
                  </h2>
                  {collapseState.accessToken && (
                      <p className="text-gray-200">
                          An access token is a credential that represents the authorization granted to the
                          client. It is commonly used to access protected resources on behalf of a user.
                      </p>
                  )}
              </section>

              {/* Refresh Token Section */}
              <section className="mb-6 bg-indigo-800 text-white p-4 rounded-lg shadow-lg">
                  <h2
                      className="text-xl font-bold mb-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 text-yellow-300"
                      onClick={() => toggleCollapse('refreshToken')}
                  >
                      🔁 The Power of Refresh Tokens
                  </h2>
                  {collapseState.refreshToken && (
                      <p className="text-gray-200">
                          A refresh token is a long-lived credential used to obtain a new access token. It adds an
                          extra layer of security.
                      </p>
                  )}
              </section>

              {/* Express.js Section */}
              <section className="mb-6 bg-teal-700 text-white p-4 rounded-lg shadow-lg">
                  <h2
                      className="text-xl font-bold mb-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 text-yellow-300"
                      onClick={() => toggleCollapse('expressJS')}
                  >
                      🚀 Building with Express.js
                  </h2>
                  {collapseState.expressJS && (
                      <p className="text-gray-200">
                          Express.js is a web application framework for Node.js, providing a minimal and flexible set
                          of features for building robust and scalable web applications.
                      </p>
                  )}
              </section>

              {/* Nest.js Section */}
              <section className="mb-6 bg-green-700 text-white p-4 rounded-lg shadow-lg">
                  <h2
                      className="text-xl font-bold mb-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 text-yellow-300"
                      onClick={() => toggleCollapse('nestJS')}
                  >
                      🌟 Nest.js: Beyond the Basics
                  </h2>
                  {collapseState.nestJS && (
                      <p className="text-gray-200">
                          Nest.js is a progressive Node.js framework for building efficient, scalable, and
                          maintainable server-side applications with TypeScript.
                      </p>
                  )}
              </section>
          </div>
      </div>

  );
};

export default Blogs;
