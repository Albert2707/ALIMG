import { useQuery } from "@tanstack/react-query";
import newRequest from "../../util/request";
import "./Photos.scss";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
const Photos = () => {
  const { error, isLoading, data } = useQuery({
    queryKey: ["photos"],
    queryFn: () =>
      newRequest.get("photos").then((res) => {
        return res.data;
      }),
  });
  return (
    <div className="container">
      {error ? (
        <p>Something went wrong</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        data.map((e: any) => <Card key={e.id} data={e} />)
      )}
    </div>
  );
};

export default Photos;
