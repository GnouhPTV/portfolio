// Google Apps Script backend for the portfolio contact form.
// It verifies the reCAPTCHA token and emails the message to my inbox.
//
// Setup (script.google.com):
// 1. New project, paste this file into Code.gs.
// 2. Project Settings > Script properties > add RECAPTCHA_SECRET = <reCAPTCHA secret key>.
//    Never put the secret key in the website code.
// 3. Deploy > New deployment > Web app: Execute as "Me", Who has access "Anyone".
// 4. Copy the Web app URL into CONTACT_ENDPOINT in src/components/Contact.tsx.

const TO_EMAIL = "phuonglt20102001@gmail.com";
const ALLOWED_HOSTS = ["gnouhptv.github.io", "localhost"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const secret = PropertiesService.getScriptProperties().getProperty("RECAPTCHA_SECRET");
    const verify = UrlFetchApp.fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "post",
      payload: { secret: secret, response: String(data.token || "") },
      muteHttpExceptions: true
    });
    const captcha = JSON.parse(verify.getContentText());
    if (!captcha.success || ALLOWED_HOSTS.indexOf(captcha.hostname) === -1) {
      return json({ ok: false, error: "captcha" });
    }

    const name = String(data.name || "").trim().slice(0, 200);
    const email = String(data.email || "").trim().slice(0, 200);
    const subject = String(data.subject || "").trim().slice(0, 200);
    const message = String(data.message || "").trim().slice(0, 5000);
    if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return json({ ok: false, error: "invalid" });
    }

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: email,
      subject: "[Portfolio] " + (subject || "New message"),
      body: "Name: " + name + "\nEmail: " + email + "\n\n" + message
    });
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: "server" });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
