export interface ITodo {
  id: string;
  title: string;
  description: string;
}

export async function getTodo() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/todo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    const data: ITodo[] = await response.json();
    return data;
  } catch(error) {
    console.error(error);
  }
}