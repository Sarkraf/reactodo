import PropTypes from "prop-types";
import React, { useState } from "react";

const GitHubLoginForm = ({ authenticityToken }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <form action="/users/auth/github" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="authenticity_token" value={authenticityToken} />
      <button
        type="submit"
        className={`btn btn-success text-lg py-2 px-6 rounded-lg ${loading ? "btn-disabled" : ""}`}
      >
        {loading ? "Connexion en cours..." : "📝 Je m'organise maintenant !"}
      </button>
    </form>
  );
};

GitHubLoginForm.propTypes = {
  authenticityToken: PropTypes.string.isRequired,
};

export default GitHubLoginForm;
