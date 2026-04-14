import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const webhookUrl = process.env.PORTAL_ACCESS_WEBHOOK_URL;

  if (!payload) {
    return NextResponse.json({ detail: "Invalid request payload." }, { status: 400 });
  }

  if (!webhookUrl) {
    return NextResponse.json({
      accepted: true,
      detail:
        "Request accepted. Configure PORTAL_ACCESS_WEBHOOK_URL to forward submissions to your CRM or automation endpoint."
    });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    if (!upstream.ok) {
      const responseText = await upstream.text();
      return NextResponse.json(
        {
          detail: `Upstream webhook rejected request (${upstream.status}): ${responseText.slice(0, 300)}`
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ accepted: true });
  } catch (error) {
    return NextResponse.json(
      {
        detail: error instanceof Error ? error.message : "Unable to forward request."
      },
      { status: 502 }
    );
  }
}
