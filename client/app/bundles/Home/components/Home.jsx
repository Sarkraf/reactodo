import { useState } from "react";
import GitHubLoginForm from "./GitHubLoginForm";

import PropTypes from "prop-types";

function Home(props) {
  const [name, setName] = useState(props.currentUser.name);

  return (
    <div className="h-full w-lvw bg-gradient-to-tl from-violet-500 via-cyan-600 to-cyan-600 flex flex-col justify-center items-center p-4">
      <div className="max-w-3xl bg-white/30 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🚀 Bienvenue sur <span className="text-indigo-500">ReacToDo</span> !
        </h1>
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">
          Salut, <span className="text-pink-500">{name}</span> ! 👋
        </h3>
        <p className="text-gray-500 mb-6 text-lg leading-relaxed">
          Organiser ses tâches n’a jamais été aussi simple ! Avec{" "}
          <span className="font-bold text-indigo-600">ReacToDo</span>, gérez vos
          To-do lists et suivez vos projets <strong>GitHub</strong> en un clin
          d'œil. Profitez d’une interface intuitive et efficace pour rester
          productif au quotidien.
        </p>
        <p className="text-gray-600 mb-8 text-md">
          Que vous travailliez seul ou en équipe, centralisez vos idées et
          avancez sereinement.
        </p>
        <GitHubLoginForm authenticityToken={props.authenticityToken} />
      </div>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
  authenticityToken: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default Home;
