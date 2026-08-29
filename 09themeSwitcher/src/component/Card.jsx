import React from "react";
import useTheme from "../Contexts/Theme";

export default function Card() {
  const { themeMode } = useTheme();

  return (
    <>
      <style>
        {`
            .box{
                width:100%;
                height:100%;
                display:flex;
                justify-content:center;
                
            }
          .card {
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            padding: 2rem;
            width: 40%;
            height:30vh;
            text-align: center;
            transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px) scale(1.02);
          }

          .card-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }

          .card-text {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .card-btn {
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: none;
            background: linear-gradient(to right, #6fb9f6, #e9b7b7);
            color: white;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s ease;
          }

          .card-btn:hover {
            background: linear-gradient(to right, #5555da, #b6b6be);
          }

          /* Theme-specific styles */
          .card.light {
            background: #f0f8ff;
            color: #333;
          }

          .card.dark {
            background: #2c2c2c;
            color: #f5f5f5;
          }
        `}
      </style>
        <div className="box">
            <div className={`card ${themeMode}`}>
            <h2 className="card-title">Theme Card</h2>
            <p className="card-text">This card adapts to your theme background.</p>
            <button className="card-btn">Action</button>
            </div>
        </div>
    </>
  );
}
