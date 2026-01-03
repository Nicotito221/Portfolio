'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// Guardamos el email en una constante para usarlo abajo
const MY_EMAIL = process.env.CONTACT_EMAIL;

export async function sendEmail(formData: FormData) {
  // Verificación de seguridad por si te olvidaste de poner la variable
  if (!MY_EMAIL) {
    return { error: 'Error de configuración en el servidor (falta email).' };
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Por favor completa todos los campos' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [MY_EMAIL],
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: message,
      html: `
        <div>
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>De:</strong> ${name} (${email})</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        </div>
      `
    });

    if (error) {
      console.error("Error de Resend:", error); // <--- AGREGA ESTO
      return { error: error.message };
    }
    return { success: true };
  } catch (error) {
    console.error("Error del Servidor:", error); // <--- AGREGA ESTO
    return { error: 'Error al enviar el email' };
  }
}