import React from "react";

export default function Card() {
  const username = ""; 

  return (
    <>
      <style>
        {`
          .card {
            background: linear-gradient(to right, #6fb9f6, #e9b7b7);
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            padding: 2rem;
            width: 320px;
            text-align: center;
            transition: transform 0.3s ease, background 0.3s ease;
            margin: 2rem auto;
          }

          .card:hover {
            transform: translateY(-5px) scale(1.03);
            background: linear-gradient(to right, #5555da, #b6b6be);
          }

          .card-title {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          .card-text {
            font-size: 1rem;
            color: #f0f0f0;
            margin-bottom: 1.5rem;
          }

          .card-btn {
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            border: none;
            background: #fff;
            color: #333;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .card-btn:hover {
            background: #333;
            color: #fff;
          }
        `}
      </style>

      <div className="card">
        <h2 className="card-title">Hello, {username} 👋</h2>
        <p className="card-text">Welcome </p>
        <button className="card-btn">Get Started</button>
      </div>
    </>
  );
}
