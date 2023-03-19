const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$^#!%*()+-?&])[a-zA-Z\d@$()+-^#!%*?&]{8,}/;

export {
  emailRegex,
  passwordRegex
}