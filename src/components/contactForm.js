import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </div>
      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <div className="control">
          <input
            className="contact-input"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            id="name"
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            className="contact-input"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            id="email"
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <div className="control">
          <textarea
            className="contact-input"
            name="message"
            value={state.message}
            onChange={handleChange}
            id="message"
            required
          />
        </div>
      </div>
      <div>
        <button className="primary-button" style={{ margin: 0, textSize: '2em' }} type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm