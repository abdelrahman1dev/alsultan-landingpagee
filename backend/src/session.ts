import session from 'express-session';

if (!process.env.SESSION_KEY) {
  throw new Error('FATAL ERROR: SESSION_KEY is not defined in .env');
}

export const sessionObject = session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false, // only create the cookie once we modify the session
  cookie: {
    secure: process.env.NODE_ENV == 'production',
    httpOnly: true,
    sameSite: 'lax'
  }
});

type UserSessionData = {
  id: number;
  name: string;
  email: string;
};

declare module 'express-session' {
  interface SessionData {
    user: UserSessionData;
  }
}
