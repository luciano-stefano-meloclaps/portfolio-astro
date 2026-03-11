import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend(undefined                              );
const POST = async ({ request }) => {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400 }
      );
    }
    const { data: emailData, error } = await resend.emails.send({
      from: "PortfolioWeb <dev@meloclaps.com>",
      // ⬆️ Si falla, prueba: "Luciano <dev@send.meloclaps.com>"
      to: ["meloclapsluciano@gmail.com"],
      // Tu Gmail donde recibes
      replyTo: email,
      // Para responderle al cliente
      subject: `Mensaje: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6d28d9;">Nuevo mensaje de ${name}</h2>
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 16px; line-height: 1.5;">${message}</p>
          <br />
          <p style="font-size: 12px; color: #888;">Enviado desde meloclaps.com</p>
        </div>
      `
    });
    if (error) {
      console.error("Error Resend:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      });
    }
    return new Response(JSON.stringify({ success: true, id: emailData?.id }), {
      status: 200
    });
  } catch (e) {
    console.error("Error Servidor:", e);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
