import { IoIosArrowDown } from "react-icons/io";

const Tabile = () => {
  const columns = ['S.no', 'Salon', 'Orders', 'Order Date', 'Delivery Date', 'Price', 'Process', 'Action'];
  const rowData = [
    { sNo: 1, salon: 'NUsrat', orders: 5, orderDate: '2024-09-01', deliveryDate: '2024-09-05', price: '$150', process: 'Pending', action: 'View' },
    { sNo: 2, salon: 'Moni', orders: 3, orderDate: '2024-09-02', deliveryDate: '2024-09-06', price: '$90', process: 'Shipped', action: 'View' },
    { sNo: 3, salon: ' Nasir ', orders: 8, orderDate: '2024-09-03', deliveryDate: '2024-09-07', price: '$240', process: 'Completed', action: 'View' },
    { sNo: 4, salon: ' Kasem ', orders: 6, orderDate: '2024-09-04', deliveryDate: '2024-09-08', price: '$180', process: 'Processing', action: 'View' },
    { sNo: 5, salon: ' Soilam ', orders: 2, orderDate: '2024-09-05', deliveryDate: '2024-09-09', price: '$60', process: 'Cancelled', action: 'View' },
  ];
    return (
        <div>

<div className="overflow-x-auto h-screen mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className=" bg-[#FEE8C8] w-[1116px]  h-[58px] ">
          <tr>
            {columns.map((colName, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-xs font-bold text-[#3E3E3E] uppercase tracking-wider"
              >
                {colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rowData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.sNo}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 flex justify-center items-center gap-2"> <img className=" object-cover h-10 w-10 rounded-full" src="https://i.ibb.co.com/9V15dbv/side-view-woman-working-indoors.jpg" alt="" /> {row.salon}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.orders}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.orderDate}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.deliveryDate}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.price}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-green-400 flex justify-center items-center gap-4 ">{row.process} <IoIosArrowDown className=" bg-[#00000040] text-[#636363] w-[16px] h-[16px] rounded-full" /> </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                <button className="text-blue-500 hover:underline">{row.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            
        </div>
    );
};

export default Tabile;