import { gql, useQuery } from "@apollo/client";
const GET_USERS = gql`
  query get_users {
    users {
      data {
        name
        id
        username
        email
      }
    }
  }
`;
export default function Home() {
  const { loading, error, data } = useQuery(GET_USERS);
  return (
    <div>
      <div> Learn Graphql</div>
    </div>
  );
}
