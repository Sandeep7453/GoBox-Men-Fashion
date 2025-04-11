import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from './FireBase';

const Form = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('Please sign in first to send a message.');
      return;
    }

    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        phone,
        sentBy: {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        },
        timestamp: serverTimestamp(),
      });

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', phone: '' });
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-center bg-cover flex justify-center items-center pt-[10vh] px-4">
      <div className="w-full md:w-[60%] p-8 rounded-3xl text-gray-800 shadow-lg border border-gray-700 backdrop-blur-md bg-white/20">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Connect With Us
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {['Name', 'Email', 'Message', 'Phone'].map((label, index) => (
            <div key={index}>
              <label className="text-lg font-semibold text-gray-900">
                {label}:
              </label>
              {label === 'Message' ? (
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 h-32 rounded-lg bg-transparent text-gray-900 border border-gray-700"
                />
              ) : (
                <input
                  type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'}
                  name={label.toLowerCase()}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  value={formData[label.toLowerCase()]}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-transparent text-gray-900 border border-gray-700"
                />
              )}
            </div>
          ))}

          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-fit bg-emerald-700 hover:bg-emerald-900 text-white text-lg font-bold p-3 rounded-lg border border-gray-700 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message 🚀'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
