import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/Auth/AuthProvider";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const URL = `http://localhost:5000/api/v1/appliedJobs?email=${user.email}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [URL]);
  return (
    <div>
      <p> HELLO I Am AppliedJobs</p>
    </div>
  );
};
export default AppliedJobs;
