import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.searchParams.get("path") ?? "/";

  const draft = await draftMode();
  draft.disable();

  return NextResponse.redirect(new URL(path, request.url));
}
