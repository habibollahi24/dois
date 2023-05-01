/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const Doi = ({ consortiumId, clientId }) => {
   const [doi, setDoi] = useState();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axios
         .get(
            `https://api.datacite.org/dois?client-id=${clientId}&consortium-id=${consortiumId}`
         )
         .then((res) => {
            setDoi(res.data);
            setLoading(false);
         });
   }, [clientId, consortiumId]);

   return (
      <div className="py-1">
         {loading ? "..." : doi?.meta.total} <span className="ml-1 text-sm">Dois</span>
      </div>
   );
};

export default Doi;
