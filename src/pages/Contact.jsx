import React, { useState } from 'react';

const paroleProibite = [
  'brutta',
  'stupido',
  'idiota',
  'parolaccia',
  'cretino',
  'cavolo',
  'mannaggia',
  'offesa1',
  'offesa2',
  'cacca',
  'scemo',
  'babbeo',
  'stronzo',
  'imbecille',
  'pirla',
  'fesso',
  'vaffa',
  'scema',
]


const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Solo numeri nel campo telefono
    if (name === 'telefono' && /[^0-9+ ]/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const contieneParoleProibite = (messaggio) => {
    const lowerMsg = messaggio.toLowerCase();
    return paroleProibite.some((parola) => lowerMsg.includes(parola))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    const { nome, telefono, messaggio } = formData;
  
    // Controllo nome valido (solo lettere e spazi)
    const nomeValido = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s']{2,}$/.test(nome);
    if (!nomeValido) {
      alert('Inserisci un nome valido (solo lettere e almeno 2 caratteri).')
      return
    }
  
    // Controllo se il nome contiene parole proibite
    if (contieneParoleProibite(nome)) {
      alert('Il nome inserito contiene parole non appropriate.');
      return
    }
  
    // Controllo telefono
    const telefonoValido = /^\+?\d{7,15}$/.test(telefono)
    if (!telefonoValido) {
      alert('Inserisci un numero di telefono valido.')
      return
    }
  
    // Controllo messaggio
    if (contieneParoleProibite(messaggio)) {
      alert('Il messaggio contiene parole non appropriate. Per favore, riscrivilo.')
      return
    }
  
    // Tutto ok: salva il messaggio
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || []
    storedMessages.push(formData);
    localStorage.setItem('messages', JSON.stringify(storedMessages))
  
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
    })
  
    alert('Il tuo messaggio è stato inviato con successo!')
  }
  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-orange-500">Contattaci</h1>

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
              className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-400 transition duration-300"
            >
              Invia
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

