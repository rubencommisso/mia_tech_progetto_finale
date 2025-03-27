import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    storedMessages.push(formData);

    localStorage.setItem('messages', JSON.stringify(storedMessages));

    setFormData({
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
    });

    alert('Il tuo messaggio è stato inviato con successo!');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-orange-600">Contattaci</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-lg font-semibold text-gray-700">
            <strong>Email:</strong> contatti@customizerphone.it
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <strong>Telefono:</strong> +39 023 456 7890
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <strong>Indirizzo:</strong> Via Roma, 45, 20123 Milano, Italia
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-200 p-6 rounded-lg shadow-lg">
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700">
                Telefono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="messaggio" className="block text-sm font-semibold text-gray-700">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows="6"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Invia
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
