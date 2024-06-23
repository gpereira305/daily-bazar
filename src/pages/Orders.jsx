import React, { useMemo, useState } from "react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("account");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const sortedOrders = useMemo(() => {
    const ordersCopy = [
      {
        account: "Toby",
        dueDate: "04/01/2011",
        amount: "$100",
        period: "03/01/2011",
      },
      {
        account: "Marcus",
        dueDate: "04/01/2012",
        amount: "$200",
        period: "03/19/2012",
      },
      {
        account: "Theresa",
        dueDate: "04/01/2013",
        amount: "$300",
        period: "12/04/2017",
      },
      {
        account: "Virginia",
        dueDate: "04/01/2014",
        amount: "$400",
        period: "23/07/2001",
      },
      {
        account: "Mariza",
        dueDate: "04/01/2015",
        amount: "$500",
        period: "06/11/2013",
      },
      {
        account: "Claudia",
        dueDate: "04/01/2016",
        amount: "$600",
        period: "03/21/2018",
      },
    ];

    return ordersCopy
      .sort((a, b) => {
        const columnA = a[sortColumn].toLowerCase();
        const columnB = b[sortColumn].toLowerCase();
        if (sortOrder === "asc") {
          return columnA.localeCompare(columnB);
        }
        return columnB.localeCompare(columnA);
      })
      .filter((order) =>
        order.account.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [sortColumn, sortOrder, searchTerm, page]);

  const totalItems = sortedOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="main-container mt-24">
      {/* search and sort */}
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4"
        />
        <select
          value={sortColumn}
          onChange={(event) => setSortColumn(event.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="account">Account</option>
          <option value="dueDate">Due Date</option>
          <option value="amount">Amount</option>
          <option value="period">Period</option>
        </select>
      </div>
      {/* table */}
      <table>
        <caption>Statement Summary</caption>
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => setSortColumn("account")}
              className={`cursor-pointer ${
                sortColumn === "account" ? `text-blue-500` : ""
              }`}
            >
              Account
            </th>
            <th
              scope="col"
              onClick={() => setSortColumn("dueDate")}
              className={`cursor-pointer ${
                sortColumn === "dueDate" ? `text-blue-500` : ""
              }`}
            >
              Due Date
            </th>
            <th
              scope="col"
              onClick={() => setSortColumn("amount")}
              className={`cursor-pointer ${
                sortColumn === "amount" ? `text-blue-500` : ""
              }`}
            >
              Amount
            </th>
            <th
              scope="col"
              onClick={() => setSortColumn("period")}
              className={`cursor-pointer ${
                sortColumn === "period" ? `text-blue-500` : ""
              }`}
            >
              Period
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.slice(startIndex, endIndex).map((order, index) => (
            <tr key={index}>
              <td data-label="Account">{order.account}</td>
              <td data-label="Due Date">{order.dueDate}</td>
              <td data-label="Amount">{order.amount}</td>
              <td data-label="Period">{order.period}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <nav className="mt-4">
        <ul className="flex gap-1">
          <li className="p-2 bg-slate-900 text-white">
            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
              className={page === 1 ? "opacity-50" : ""}
            >
              Prev
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`p-2  text-white ${
                index + 1 === page ? "bg-red-500" : "bg-slate-900"
              }`}
            >
              <button
                onClick={() => handlePageChange(index + 1)}
                disabled={index + 1 === totalPages && page === totalPages}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="p-2 bg-slate-900 text-white">
            <button
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
              className={page === totalPages ? "opacity-50 " : ""}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Orders;
