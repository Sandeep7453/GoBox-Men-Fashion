import React from 'react';
import notify from '../Component/Notify.jsx'; // Adjust the path

function NotifyModal({ onClose }) {
  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center text-white">
      <div className=" relative h-fit w-fit px-5 py-5 bg-violet-700 rounded-lg shadow-lg">
      <button onClick={onClose} className="absolute top-3 right-3 bg-black">
          {cross}
        </button>

        <h1 className="text-xl font-bold mb-3">Notifications</h1>
       
        <ul className="space-y-2">
          {notify.notifications.map((item) => (
            <li key={item.id} className="px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition">
              <a href={item.link} className="flex items-center space-x-2">
                <span>{item.message}</span>
                <span className="text-sm text-gray-400">({new Date(item.timestamp).toLocaleString()})</span>
              </a>
            </li>
          ))}
        </ul>

        <button className="mt-4 px-4 py-2 bg-red-500 rounded-full hover:bg-red-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default NotifyModal;
