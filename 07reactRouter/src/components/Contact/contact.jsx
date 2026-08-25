import "./contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h1 className="contact-heading">Get in touch:</h1>
                        <p className="contact-subheading">
                            Fill in the form to start a conversation
                        </p>

                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div className="contact-text">Acme Inc, Street, State, Postal Code</div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div className="contact-text">+44 1234567890</div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">✉️</span>
                            <div className="contact-text">info@acme.org</div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Full Name" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tel" className="hidden">Number</label>
                            <input type="tel" id="tel" name="tel" placeholder="Telephone Number" className="form-input" />
                        </div>

                        <button type="submit" className="form-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
