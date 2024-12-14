import React, { useState } from "react";
import "./PaymentSection.scss";

const PaymentSection = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [amount, setAmount] = useState(49.99); // Exemple de montant

  const handlePayment = (e) => {
    e.preventDefault();
    // Logique de traitement du paiement (exemple)
    alert("Paiement effectué avec succès !");
  };

  return (
    <section className="payment-section">
      <h2>Section de Paiement</h2>

      <div className="payment-container">
        {/* Résumé de commande */}
        <div className="order-summary">
          <h3>Résumé de la commande</h3>
          <div className="summary-details">
            <p>Produit : Abonnement Premium</p>
            <p>
              Total : <span>${amount.toFixed(2)}</span>
            </p>
          </div>
        </div>

        {/* Formulaire de paiement */}
        <form className="payment-form" onSubmit={handlePayment}>
          <h3>Informations de paiement</h3>

          <label htmlFor="nameOnCard">Nom sur la carte</label>
          <input
            type="text"
            id="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Nom complet"
            required
          />

          <label htmlFor="cardNumber">Numéro de carte</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 1234 5678"
            required
          />

          <div className="card-details">
            <div>
              <label htmlFor="expiryDate">Date d'expiration</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                required
              />
            </div>
          </div>

          <button type="submit" className="pay-button">
            Payer ${amount.toFixed(2)}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentSection;
