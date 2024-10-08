"use client"; // Indique que c'est un composant client

import { useState, useRef } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Fonction pour démarrer ou arrêter la vidéo
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fonction pour rejouer la vidéo dès le début
  const replayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Revenir au début
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Fonction pour afficher la vidéo en plein écran
  const fullscreenVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-4xl">
        {" "}
        {/* Ajustement de la taille */}
        <video
          ref={videoRef}
          className="w-full rounded-md"
          src="/videos/5g_open_road.mp4"
          controls={false}
          muted
          style={{ width: "1000px", height: "600px" }} // Ajuster la largeur et la hauteur ici
        />
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={toggleVideo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {isPlaying ? "Arrêter la vidéo" : "Démarrer la vidéo"}
        </button>

        <button
          onClick={replayVideo}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Rejouer
        </button>

        <button
          onClick={fullscreenVideo}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
        >
          Plein écran
        </button>
      </div>
    </section>
  );
};

export default Video;
