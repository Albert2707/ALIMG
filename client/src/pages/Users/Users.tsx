import { useQuery } from "@tanstack/react-query";
import newRequest from "../../uitl/request";
const Users = () => {
  const { error, isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      newRequest.get("users").then((res) => {
        return res.data.results;
      }),
  });
  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data.map((e: any) => <span key={e.id}>{e.id}</span>)
      )}
    </div>
  );
};

export default Users;
