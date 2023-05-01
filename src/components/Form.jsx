/* eslint-disable react/prop-types */
const Form = ({ submitHandler, consortiumId, setCosortiumId }) => {
   return (
      <form
         onSubmit={submitHandler}
         className="flex justify-center space-x-2 items-center p-1"
      >
         <label className="text-xs text-gray-600 font-semibold">cons_id:</label>
         <input
            placeholder="Example daraco ..."
            className="border-2 rounded-md px-3 py-1  focus:outline-none placeholder:text-xs"
            type="text"
            value={consortiumId}
            onChange={(e) => setCosortiumId(e.target.value.toLowerCase())}
         />
         <button
            className="border-2 rounded-md px-2 py-1 bg-gray-200 text-gray-600 font-semibold"
            type="submit"
         >
            Send
         </button>
      </form>
   );
};

export default Form;
