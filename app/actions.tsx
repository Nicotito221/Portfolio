'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Por favor completa todos los campos' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Usa este email por defecto si no tienes dominio propio aún
      to: ['nicolasemilioangerossa@gmail.com'], // Tu email real donde recibirás los mensajes
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email, // Para que al responder le llegue a la persona
      text: message,
      // Opcional: puedes usar html para darle formato
      html: `
        <div>
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        </div>
      `
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { error: 'Error al enviar el email' };
  }
}