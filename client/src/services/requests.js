export const fetchUsers = async () => {
  const response = await fetch('http://localhost:8080/api/v1/user/', {
    method: 'get'
  });
  return await response.json();
};

export const searchUsers = async value => {
  const result = await fetch(`http://localhost:8080/api/v1/user/${value}`, {
    method: 'get'
  });
  return await result.json();
};

export const deleteUser = async userId => {
  const result = await fetch(
    `http://localhost:8080/api/v1/user/delete/${userId}`,
    {
      method: 'delete'
    }
  );
  return await result.text();
};

export const saveUser = async user => {
  const result = await fetch(`http://localhost:8080/api/v1/user/save`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ ...user })
  });
  return await result.json();
};
