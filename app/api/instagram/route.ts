import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  const fields = "id,caption,media_url,thumbnail_url,permalink,media_type";
  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${token}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json({ posts: data.data || [] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch Instagram posts" }, { status: 500 });
  }
}