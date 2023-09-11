import type { AuthOptions, User } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { users } from '../data/users';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        nickname: { label: 'nickname', type: 'text', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      authorize: async (credentials) => {
        if (!credentials?.nickname || !credentials.password) return null;
        const currentUser = users.find(user => user.nickname === credentials.nickname);
        if (currentUser && currentUser.password === credentials.password) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...userWithoutPass } = currentUser;
          console.log('userWithoutPass', userWithoutPass);
          
          return userWithoutPass as User;
        }

        return null;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  }
};