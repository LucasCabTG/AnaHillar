// src/components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
  const [consent, setConsent] = useState(Cookies.get('cookieConsent') === 'true');
  const [preferences, setPreferences] = useState(Cookies.get('cookiePreferences') ? JSON.parse(Cookies.get('cookiePreferences')) : {});
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  const handleAcceptAll = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    const allPreferences = {
      performance: true,
      functionality: true,
      advertising: true,
    };
    Cookies.set('cookiePreferences', JSON.stringify(allPreferences), { expires: 365 });
    setPreferences(allPreferences);
    setConsent(true);
  };

  const handleAcceptPreferences = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    Cookies.set('cookiePreferences', JSON.stringify(preferences), { expires: 365 });
    setConsent(true);
    setShowPreferencesModal(false);
  };

  const handleReject = () => {
    Cookies.set('cookieConsent', 'false', { expires: 365 });
    Cookies.remove('cookiePreferences');
    setPreferences({});
    setConsent(false);
  };

  const handleTogglePreference = (category) => {
    setPreferences(prev => ({ ...prev, [category]: !prev[category] }));
  };

  useEffect(() => {
    if (!consent) {
      // Elimina todas las cookies no esenciales
      Cookies.remove('performanceCookie');
      Cookies.remove('functionalityCookie');
      Cookies.remove('advertisingCookie');
    }
  }, [consent]);

  if (consent) {
    return null;
  }

  return (
    <>
      <div className="cookie-consent-banner">
        <p>This site uses cookies to improve your experience. By continuing to browse the site you are agreeing to our use of cookies.</p>
        <button onClick={handleAcceptAll}>Accept all</button>
        <button onClick={handleReject}>Reject</button>
        <button onClick={() => setShowPreferencesModal(true)}>Manage preferences</button>
      </div>

      {showPreferencesModal && (
        <div className="preferences-modal">
          <div className="preferences-content">
            <h2>Manage cookie preferences</h2>
            <label>
              <input
                type="checkbox"
                checked={preferences.performance || false}
                onChange={() => handleTogglePreference('performance')}
              />
              Performance cookies
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.functionality || false}
                onChange={() => handleTogglePreference('functionality')}
              />
              Functionality cookies
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.advertising || false}
                onChange={() => handleTogglePreference('advertising')}
              />
              Advertising cookies
            </label>
            <button onClick={handleAcceptPreferences}>Guardar preferencias</button>
            <button onClick={() => setShowPreferencesModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
