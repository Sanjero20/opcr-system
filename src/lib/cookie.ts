export function setCookie(cookieName: string, value: string) {
  // Calculate the expiration time in 1 hour (in milliseconds)
  const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour

  // Create a Date object for the expiration time
  const expires = new Date(expirationTime);

  // Construct the cookie string
  const cookieString = `${cookieName}=${value}; expires=${expires.toUTCString()}; path=/`;

  document.cookie = cookieString;
}

export function getCookie(cookieName: string) {
  const name = `${cookieName}=`;
  const cookies = document.cookie.split(';');

  for (const cookie of cookies) {
    const trimmedCookie = cookie.trim();
    if (trimmedCookie.startsWith(name)) {
      return trimmedCookie.substring(name.length);
    }
  }

  return null;
}

export function removeCookie(cookieName: string) {
  // Set the expiration date to a date in the past (e.g., 1 second ago)
  const expirationDate = new Date(0);

  // Construct the cookie deletion string
  const cookieDeletionString = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/`;

  // Set the cookie deletion string, which effectively removes the cookie
  document.cookie = cookieDeletionString;
}
