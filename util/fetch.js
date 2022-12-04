// Gets all media
export async function getAllMedia() {
  const res = await fetch('http://localhost:3000/api/media');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = res.json();
  return data;
}