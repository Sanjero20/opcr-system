import { cookies } from 'next/headers';

const apiHeaders = () => {
  const token = cookies().get('token')?.value;

  return {
    headers: {
      Cookie: `token=${token};`,
    },
  };
};

export { apiHeaders };
