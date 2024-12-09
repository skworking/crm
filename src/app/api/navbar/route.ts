import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
  const url = new URL(request.url);
  // Extract the endpoint from searchParams
  const endpoint = url.searchParams.get('endpoint');

  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint query parameter is missing' });
  }

  const filePath = path.join(process.cwd(), 'public', 'navbarData.json');
  try {
    // Read the navbarData.json file
    const fileData = await fs.readFile(filePath, 'utf-8');
    const navbarData = JSON.parse(fileData);

    // Find the matching data in navbarData based on the normalized endpoint
    const data = navbarData[endpoint] || navbarData['default'];

    return NextResponse.json({ menuItems: data.menuItems, links: data.links, overview: data.overview });
  } catch (error) {
    console.error('Error reading or parsing navbar data:', error);
    return NextResponse.json({ error: 'Failed to fetch navbar data' });
  }
}
