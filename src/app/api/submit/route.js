import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(
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

    const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Missing Spreadsheet ID");
    }

    const id = uuidv4();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "leads!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[id, body.name, body.phone, body.email, body.issue]],
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
