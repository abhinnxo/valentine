"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";

export default function Home() {
  const [click, setClick] = useState(0);
  const [yesClicked, setyesClicked] = useState(false);

  const noBtnText = [
    "NO",
    "Are you sure?",
    "Confirm decision?",
    "Really?",
    "Double-check, then confirm.",
    "No turning back! Sure?",
    "Confident? Ready? Go!",
    "Proceed with caution?",
    "Confirm now, or reconsider.",
    "Final answer? Yes/No",
    "Sure about this?",
  ];

  const AskoutPage = () => {
    return (
      <main className="container flex justify-center items-center h-[100vh]">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-center">
            Will you go out on a Date with me?
          </h1>
          <img
            src="https://media.tenor.com/cofRHcGGOfoAAAAi/shy-cute.gif"
            alt="Bear Image"
            className="mx-auto my-6"
          />
          <div className="mt-12 flex justify-center">
            <button
              id="yesbtn"
              className="px-4 py-2 rounded-md text-white bg-emerald-500"
              onClick={() => setyesClicked(true)}
            >
              {click < 10 ? "YES" : "lol, u got only one option"}
            </button>
            {click < 10 && (
              <button
                id="nobtn"
                className="px-4 py-2 rounded-md text-white ml-2 bg-rose-500"
                onClick={() => setClick(click + 1)}
              >
                {noBtnText[click]}
              </button>
            )}
          </div>
        </div>
      </main>
    );
  };
  const YesPage = () => {
    const [shareButtonText, setShareButtonText] = useState("SHARE");

    const jsConfetti = new JSConfetti();
    useEffect(() => {
      jsConfetti.addConfetti();
    }, []);

    useEffect(() => {
      const share = document.querySelector("#share");

      share.addEventListener("click", () => {
        navigator.clipboard
          .writeText("https://valentine.abhinn.xyz")
          .then(() => {
            // Success notification (optional)
            setShareButtonText("Copied to clipboard!");
            setTimeout(() => {
              setShareButtonText("SHARE");
            }, 1000);
          })
          .catch((err) => {
            // Error handling (optional)
            console.error("Error copying to clipboard:", err);
          });
      });
    }, []);

    return (
      <main className="container flex flex-col justify-center h-[100vh] items-center">
        <h1 className="text-4xl text-center">
          Thanks for being my valentine&nbsp;💖
        </h1>
        <img
          src="https://media.tenor.com/9_Cuwoj-m5wAAAAi/cute-cat.gif"
          alt="Bear Image"
          className="my-10"
        />
        <button
          className="mx-auto px-6 py-2 mt-10 bg-white border-2 rounded-lg border-gray-400"
          id="share"
        >
          {shareButtonText}
        </button>
      </main>
    );
  };
  return yesClicked ? <YesPage /> : <AskoutPage />;
}
