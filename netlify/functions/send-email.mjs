// Tiempo minimo entre carga de pagina y envio (anti-bot)
const MIN_SUBMIT_TIME_MS = 3000;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2000;

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function respond(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

export const handler = async (event) => {
  // Permitir preflight CORS (netlify dev usa puertos distintos)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return respond(405, { error: 'Método no permitido.' });
  }

  try {
    const { name, email, message, website, _timestamp } = JSON.parse(event.body);

    // Anti-spam: Honeypot — los bots rellenan este campo oculto.
    // Responder con exito falso para que no reintenten.
    if (website) {
      return respond(200, { success: true, message: 'Mensaje enviado.' });
    }

    // Anti-spam: Tiempo minimo — un humano tarda al menos 3s en rellenar el formulario.
    const loadTime = parseInt(_timestamp, 10);
    if (isNaN(loadTime) || (Date.now() - loadTime) < MIN_SUBMIT_TIME_MS) {
      return respond(200, { success: true, message: 'Mensaje enviado.' });
    }

    // Validacion de campos
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return respond(400, { error: 'Todos los campos son obligatorios.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return respond(400, { error: 'El email no es válido.' });
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
      return respond(400, { error: `El nombre no puede superar ${MAX_NAME_LENGTH} caracteres.` });
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return respond(400, { error: `El mensaje no puede superar ${MAX_MESSAGE_LENGTH} caracteres.` });
    }

    // Variables de entorno
    const API_KEY = process.env.API_BREVO;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

    if (!API_KEY || !CONTACT_EMAIL) {
      console.error('Faltan variables de entorno: API_BREVO o CONTACT_EMAIL');
      return respond(500, { error: 'Error de configuración del servidor.' });
    }

    // Sanitizar para el HTML del email
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage);

    // Enviar via Brevo Transactional Email API
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio wilsonmunoz.com', email: CONTACT_EMAIL },
        to: [{ email: CONTACT_EMAIL }],
        replyTo: { email: trimmedEmail, name: trimmedName },
        subject: `Nuevo mensaje de ${safeName}`,
        htmlContent: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #314158;">Nuevo mensaje desde tu portfolio</h2>
            <hr style="border: 1px solid #e2e8f0;">
            <p><strong>Nombre:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Mensaje:</strong></p>
            <div style="background: #f8fafc; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${safeMessage}</div>
            <hr style="border: 1px solid #e2e8f0; margin-top: 24px;">
            <small style="color: #62748e;">Enviado desde el formulario de contacto de wilsonmunoz.com</small>
          </div>
        `,
      }),
    });

    if (!brevoRes.ok) {
      const errData = await brevoRes.json().catch(() => ({}));
      console.error('Brevo API error:', brevoRes.status, errData);
      return respond(502, { error: 'Error al enviar el mensaje. Inténtalo más tarde.' });
    }

    return respond(200, { success: true, message: '¡Mensaje enviado! Te responderé pronto.' });
  } catch (error) {
    console.error('Function error:', error);
    return respond(500, { error: 'Error interno del servidor.' });
  }
};
