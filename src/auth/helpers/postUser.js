const api = 'http://localhost:3000/peliFlix';

export const postUser = async (data) => {
  try {
    const response = await fetch(api + '/createUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();

  } catch (e) {
    return {
      exito: false,
      e
    }
  }
};

export const postLogin = async (data) => {
  const response = await fetch(api + '/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};