import { useEffect, useState } from "react";
import "./github.css";
function Github() {
  const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(function () {
    // setLoading(false);
    const apiCall = fetch("https://api.github.com/users/akshaykhatri012")
      .then((res) => res.json())
      .then((item) => {
        // console.log(item);
        setData(item);
      });
    return () => apiCall;
    // setLoading(true);
  }, []);
  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      <div className="github">
        <div className="avatar">
          github_avatar :
          {data && <img src={data.avatar_url} alt="Git_picture" />}
        </div>
        <div className="github-prop">
          <div className="followers">
            github_followers : {data && data.followers}
          </div>
          <div className="followers"> github_name : {data && data.login}</div>
          <div className="followers"> github_id : {data && data.html_url}</div>
        </div>
      </div>
      {/* {loading ? `Github Followers : ${data.followers}` : "loading..."} */}
      {/* {loading ? <img src={data.avatar_url} alt="Git_picture" /> : "Loading..."} */}
    </div>
  );
}

export default Github;
