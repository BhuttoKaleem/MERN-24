import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  
  const globalState = useSelector((state) => state);
  var total = 0;

  Object.keys(globalState.cart).map((itemKey, counterKey) => {
    total += globalState?.cart[itemKey]?.qty * globalState?.cart[itemKey]?.price
  })

  return (
    <React.Fragment>
      <div className="flex flex-cols">

    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-4">Checkout Table</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"># </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">qty</th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">net price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {
          Object.keys(globalState.cart).map((itemKey, counterKey) => (
            <tr key={itemKey}>
              <td className="px-6 py-4 whitespace-nowrap">{counterKey + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{globalState?.cart[itemKey]?.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{globalState?.cart[itemKey]?.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{globalState?.cart[itemKey]?.qty}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {globalState?.cart[itemKey]?.qty *
                  globalState?.cart[itemKey]?.price}
                  { }
              </td>
            </tr>
          ))
        }

          <tr className="border-t-orange-300 border-[1px]">
            <td className="px-6 py-4 whitespace-nowrap" colSpan={"4"}></td>
            <td className="px-6 py-4 whitespace-nowrap">{total}</td>
          </tr>
        
        </tbody>
      </table>
    </div>
    
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 gap-2">
    <h3 className="block text-gray-700 text-sm font-bold mb-2">Payment Info</h3>
    <div className="flex items-center justify-between">
    
                <div className="w-[30vh] mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiration">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="abc@gmail.com" />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                        Card Information
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card-information" type="number" placeholder="1234-1234-1234-1234" />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiration">
                        Expiration
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration" type="text" placeholder="MM/YY" />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                        CVV
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="123" />
              
                </div>
             
                
            </div>
          
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Checkout
        </button>
        </div>
        </div>

        </React.Fragment>
  );
}
