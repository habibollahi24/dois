/* eslint-disable react/prop-types */
import Doi from "./Doi";

const Table = ({ data, consortiumId }) => {
   return (
      <table className="table-auto w-full rounded-lg overflow-hidden">
         <thead className="bg-gray-100 ">
            <tr>
               <th className="text-center font-normal p-2 ">Provider</th>
               <th className="text-center font-normal p-2 ">Client IDs</th>
               <th className="text-center font-normal p-2 ">Dois</th>
            </tr>
         </thead>
         <tbody>
            {data.data.map((provider) => (
               <tr key={provider.id} className="even:bg-gray-100 odd:bg-gray-50 ">
                  <td className="text-center text-sm w-1/3 text-gray-800  p-2">
                     {provider.id}
                  </td>
                  <td className="text-center text-sm w-1/3 text-gray-800  p-2">
                     {provider.relationships.clients.data.map((client) => (
                        <div key={client.id}>
                           <p className="py-1">{client.id}</p>
                        </div>
                     ))}
                  </td>
                  <td className="text-center text-sm w-1/3 text-gray-800  p-2">
                     {provider.relationships.clients.data.map((client) => (
                        <Doi
                           key={client.id}
                           clientId={client.id}
                           consortiumId={consortiumId}
                        />
                     ))}
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

export default Table;
