import axios from "axios";
type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const res = await axios.get("https://api.github.com/users");
        const users: User[] = res.data;
        return users.map(({ id, login, avatar_url, html_url }) => ({
          id,
          login,
          avatar_url,
          html_url,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUserByName: async (_: any, args: any) => {
      try {
        const res = await axios.get(
          `https://api/github.com/users/${args.name}`
        );
        const user: User = res.data;
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
