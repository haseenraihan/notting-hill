import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  name: string;
  email: string;
  phone?: string;
  destination?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, destination, message }: InquiryRequest = await req.json();

    // Send notification to business owner
    const ownerEmailResponse = await resend.emails.send({
      from: "Notting Hill Voyages <onboarding@resend.dev>",
      to: ["info@nottinghillvoyages.com"],
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%); padding: 30px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0;">Notting Hill Voyages</h1>
            <p style="color: #ffffff; margin-top: 10px;">New Enquiry Received</p>
          </div>
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #0f1419; margin-top: 0;">Customer Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 140px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Dream Destination:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${destination || 'Not specified'}</td>
              </tr>
            </table>
            <h3 style="color: #0f1419; margin-top: 20px;">Message:</h3>
            <div style="background: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #d4af37;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="background: #0f1419; padding: 20px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">Reply directly to ${email} to respond to this enquiry.</p>
          </div>
        </div>
      `,
      reply_to: email,
    });

    console.log("Owner notification email sent:", ownerEmailResponse);

    // Send confirmation to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Notting Hill Voyages <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your enquiry - Notting Hill Voyages",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%); padding: 30px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0;">Notting Hill Voyages</h1>
            <p style="color: #ffffff; margin-top: 10px;">Your Journey Begins Here</p>
          </div>
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #0f1419; margin-top: 0;">Thank you, ${name}!</h2>
            <p style="color: #333; line-height: 1.6;">
              We've received your travel enquiry and are excited to help make your dream journey a reality.
            </p>
            <p style="color: #333; line-height: 1.6;">
              One of our travel experts will be in touch within 24 hours to discuss your requirements.
            </p>
            <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
              <h3 style="color: #0f1419; margin-top: 0;">Your Enquiry Summary:</h3>
              <p style="margin: 5px 0;"><strong>Destination:</strong> ${destination || 'To be discussed'}</p>
              <p style="margin: 5px 0;"><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>
            <p style="color: #333; line-height: 1.6;">
              <strong>Need to reach us sooner?</strong><br>
              Call us at <a href="tel:+447385608114" style="color: #d4af37;">+44 7385 608 114</a><br>
              Or WhatsApp us directly!
            </p>
          </div>
          <div style="background: #0f1419; padding: 20px; text-align: center;">
            <p style="color: #d4af37; margin: 0 0 10px 0;">Notting Hill Voyages</p>
            <p style="color: #888; margin: 0; font-size: 12px;">Sylhet, Bangladesh | info@nottinghillvoyages.com</p>
          </div>
        </div>
      `,
    });

    console.log("Customer confirmation email sent:", customerEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
