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

    const { name, email, message, phone } = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      phone: formData.phone.trim(),
    };

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
    <div className="min-h-screen bg-gray-900 flex justify-center items-center pt-[10vh] px-4">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-3xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Connect With Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 text-white placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 text-white placeholder-gray-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 text-white placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-900 text-white placeholder-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-emerald-500/30"
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
