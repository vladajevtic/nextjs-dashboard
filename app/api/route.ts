import { sql } from '@vercel/postgres';

export async function fetchChartData() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)


    const data = await sql<ChartData>`SELECT * FROM chartdata`;



    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch chartdata data.');
  }
}

export async function GET() {
  try {
    const data = await fetchChartData();
    return Response.json({ data });
  }catch (error) {
    return Response.json({ error }, { status: 500 });
  }

}