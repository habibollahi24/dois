import { useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
   const [consortiumId, setCosortiumId] = useState("");
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);

   const getConsorciumProviders = async () => {
      const providers = await axios.get(
         `https://api.datacite.org/providers?consortium-id=${consortiumId}`
      );
      setData(providers.data);
      setLoading(false);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      setLoading(true);
      getConsorciumProviders();
      setCosortiumId("");
   };

   return (
      <div className="max-w-md mx-auto container mt-4 p-1">
         <Form
            submitHandler={submitHandler}
            setCosortiumId={setCosortiumId}
            consortiumId={consortiumId}
         />
         {loading && <Loading />}
         {data && data.meta.total !== 0 ? (
            <>
               <p className="text-center py-4 text-sm text-gray-600">
                  the number of provider from
                  <span className="text-base mx-1 text-gray-800">
                     {data.data[0].relationships.consortium.data.id}
                  </span>
                  is
                  <span className="text-base mx-1 text-gray-800">{data.meta.total}</span>
               </p>
               <Table data={data} consortiumId={consortiumId} />
            </>
         ) : !loading && data ? (
            <p className="text-center py-4">Not Found...</p>
         ) : (
            ""
         )}
      </div>
   );
}

export default App;
