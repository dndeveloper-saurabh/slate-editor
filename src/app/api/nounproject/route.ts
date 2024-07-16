// app/api/nounproject/route.js
import OAuth from "oauth";
import { NextResponse } from "next/server";

export async function GET() {
  const KEY = "f3d360de8ea44d73bb2af5c00569dc45";
  const SECRET = "9e8e44f3b0c24d52b2c97d88d5b3f57e";

  return new Promise((resolve, reject) => {
    const oauth = new OAuth.OAuth(
      "https://api.thenounproject.com",
      "https://api.thenounproject.com",
      KEY,
      SECRET,
      "1.0",
      null,
      "HMAC-SHA1"
    );

    oauth.get(
      "https://api.thenounproject.com/v2/icon/6324",
      "",
      "",
      function (e, data, response) {
        if (e) {
          console.error(e);
          resolve(
            NextResponse.json(
              { error: "Failed to fetch data" },
              { status: 500 }
            )
          );
        } else {
          // const _data = require("util").inspect(data);
          resolve(NextResponse.json(JS));
        }
      }
    );
  });
}
