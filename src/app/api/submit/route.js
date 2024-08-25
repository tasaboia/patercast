import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "contato@patercast.iam.gserviceaccount.com",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJlXMYqrPQw2b0\nRa2VxG2w2Fvgvpx7RCECNEGpVqaJ8XzZJZdKYtt+F0NpRyI7feC36RMQgaUHcy7n\nTEBpMIBYspbYJpBBGESyUHWz1nhfk3Hx975wPq+/EnJxqB5l6T4Oxn2gXQy0dlNd\nAcrBSKL8NRcxX1Qv6DYkFSoa439hg5qssN+0enGIkPlma4koDR1mIGZt14ZUhUn+\n5tErjgkOwODkHBGrMFIjbCuvbjnB51sVxXJHB7I8Nml7cvdJylfxBlvHYgWff7Gg\npyNOhVrYAsox15pbVnYMt2B9ivGROtZ+nzN8KxpY4QxPDRyPKpxu3EWAFNT+w/1e\nT9jpU61zAgMBAAECggEAKHXb4DArK0SbnVB0aOvYOj6WXnSPvixd7LEDclI6Lazn\nw1ArusNxuxYKTAaQSaCOGmefpKYLqzIzY+/nrUeHJw52D+DfYVVKtom044s54RmS\nU89AoO++bVl2cHg5YE0EZAH5ZdSXbOazQ1HIl6jNzY+rX2iicGhAq8HRnRC0IC/O\nRSAzamhLfaF58pGSHqeqlZR3fP+luKpB7eN4wm5TIoiL4CVAVe5Q1HABDVxvPaTs\nzvUaD+OFDxav5uIKxMSDRLdtwIz79xs9KNTOWrS4tV1AlPAVQkGtVwUX0E+nJR4/\nDPSVt4rypHTEKAzxwpK0/nlWLipaBVXBWpPJo8QC4QKBgQC899iZ5TqlGa6+x0Kj\nI6g48ERSWTlCDLWa+zS8ldfLFrORSfUUbNf5bbPDVWsbZnfjAatcL/GkcaPU5aql\nSfbChEjfNzjWaLK17Jic1B5/RtbFSKhibjeE7fQ9lR3kLyr0mY2aMy9+4zL1Jw8g\nLSh2GkGkKEzEBCSQEvuiAp7WowKBgQC6Y2bKT55LQjNhIMevg8QZv3Ilnvhrx41y\nk1t+ixI7P3OR7Wux5qFCWEcgCPeYKOD2/15cGqbIx2a/SCUlNk8WQ+LfG9VWGuCj\nZe12PV29evatEalkLh1XCxkQsRjHqh2/V+4jUY4CFzvSyrtmzEqZnBniZUGrDPuM\nKL0UW8XK8QKBgQC10IHHEJbsY1mOlYm4DYa9we76jH5a3n+dLjX/fOyzqpP7Jn13\nuYHTq4laV8VGB8Ex2VlWyYpl/jDzlkYp4pBZd43ltuwo33OTNqFfw3fUXgQmrVHV\n4tXoQErPNboc4oUh8twbkUQRgeh1l68l9k0H1RtzJpM1xgan2JvjtUG+oQKBgFBV\nAzpy8lCRab+U9zuIWP6X6sSYLY2WZjpZlHeHzQXIJTFh2KbGNf54Ob9u3fewtrT9\n/1dHDVc/yeLrX0cYjyGThLaQMnR4BRWnmp75d+twkdyp3g4VagPX/qeZDIsRoNyV\nM0f5oHD6PohtZDO8HPLzupw+8/ybDdesv0GFBEyhAoGAFtXtLZniEqgZ05h8vjFB\nS2ko7+CH8aGZG3SDm6qt1ZwxJ9mPvSukT2ZFo4i/hJA8xiV/v2lwgkJZNgP/wmHB\niyfAjMVDsVaK+FvfGDy33rm6zKi00/FGTH2NbG/0TieACmbX9OQbgBxAE2HUOxi5\nH4zA9ExGDM1K5iisHBTZYkg=\n-----END PRIVATE KEY-----\n".replace(
            /\\n/g,
            "\n"
          ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const spreadsheetId = "1oHvBwfWL5GvpAm9WDiJQ_g0biy-cTtCY9DcvTJGmb8E";
    if (!spreadsheetId) {
      throw new Error("Missing Spreadsheet ID");
    }

    const id = uuidv4();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "leads!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[id, body.name, body.phone, body.email, body.issues]],
      },
    });

    return new Response(JSON.stringify({ data: response.data }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error appending data to Google Sheet:", e);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
