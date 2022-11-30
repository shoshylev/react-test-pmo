function validateUrl(s) {
    let url;
    try {
      url = new URL(s);
    } catch (e) { return false; }
    return /https?/.test(url.protocol);
  }

  export function validateEmail(s) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s);
  }

export const Validators = {
    website: validateUrl,
    email: validateEmail,
};