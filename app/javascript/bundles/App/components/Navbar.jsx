import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, authenticityToken }) => {
  return (
    <nav className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">ReacTodo</Link>
      </div>
      <div className="flex gap-2">
        {currentUser ? (
          <>
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            <div className="dropdown dropdown-end">
              <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={currentUser.avatar_url} alt={currentUser.name} />
                </div>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <form action="/logout" method="delete">
                    <button type="submit" className="w-full text-left px-4 py-2">Logout</button>
                  </form>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <form action="/users/auth/github" method="post">
            <input type="hidden" name="authenticity_token" value={authenticityToken} />
            <button
              type="submit"
              className="btn btn-ghost text-xl text-white font-bold py-2 px-4 rounded-4xl flex items-center">
              Sign in with GitHub
              <img
                src="/assets/github-logo.png"
                alt="GitHub Logo"
                className="w-8 h-8 ml-2 rounded-full bg-white"
              />
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
