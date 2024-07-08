import React, { useMemo, useState } from "react";
import { users } from "../../data";
import { useForm } from "react-hook-form";

export default function Orders() {
  const pageSize = 6; // Number of orders to display per page
  const [ordersCopy, setOrdersCopy] = useState(users); // Copy of the user data
  const [page, setPage] = useState(0); // Current page number
  const [searchText, setSearchText] = useState(""); // Search text input
  const [editModalOpen, setEditModalOpen] = useState(false); // Edit modal state
  const [editingOrder, setEditingOrder] = useState(null); // Editing order state
  const { register, handleSubmit, reset } = useForm(); // Form state

  // Function to delete an order
  const handleDelete = (order) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      const updatedOrders = ordersCopy?.filter(
        (item) => item.account !== order.account
      );
      setOrdersCopy(updatedOrders);
    }
  };

  // Filter orders based on search text
  const filteredOrders = useMemo(() => {
    const lowerSearchText = searchText.toLowerCase(); // Convert search text to lowercase
    return (
      ordersCopy?.filter((order) =>
        // Check if any of the order properties (account, dueDate, amount) contain the search text
        [order.account, order.dueDate, order.amount].some(
          (value) => value?.toLowerCase?.()?.includes(lowerSearchText) // Check if value is truthy and lowercase includes search text
        )
      ) || []
    );
  }, [searchText, ordersCopy]);

  // Display orders based on current page and page size
  const displayedOrders = useMemo(() => {
    const start = page * pageSize; // Start index of the current page
    const end = start + pageSize; // End index of the current page
    return filteredOrders.slice(start, end); // Slice the filtered orders based on start and end indices
  }, [page, pageSize, filteredOrders]);

  // Calculate the number of pages based on the filtered orders and page size
  const pageCount = useMemo(
    () => Math.ceil(filteredOrders.length / pageSize) || 0, // Calculate the number of pages by dividing the length of filtered orders by the page size and rounding up
    [filteredOrders.length, pageSize]
  );

  // Function to handle editing an order
  const handleEdit = (order) => {
    setEditingOrder(order); // Set the editing order state to the selected order
    setEditModalOpen(true); // Open the edit modal
  };

  // Function to handle submitting the edited order
  const handleEditSubmit = (data) => {
    const updatedOrders =
      ordersCopy?.map(
        (order) =>
          order.account === editingOrder?.account // Check if the order being edited matches the account property of the order in the ordersCopy array
            ? { ...order, ...data } // If it matches, return a new object with the updated order properties
            : order // If it doesn't match, return the original order
      ) || [];
    reset(); // Reset the form state
    setEditModalOpen(false); // Close the edit modal
    setEditingOrder(null); // Clear the editing order state
    setOrdersCopy(updatedOrders); // Update the ordersCopy state with the updated orders
  };

  return (
    <div className="p-4 max-w-[1200px] mx-auto mt-20">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 mb-4"
      />
      {!ordersCopy || pageCount === 0 ? (
        <div className="p-4 max-w-[1200px] mx-auto mt-20">
          No orders available
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th className="text-black text-base">ID</th>
                <th className="text-black text-base">Name</th>
                <th className="text-black text-base">Price</th>
                <th className="text-black text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedOrders.map((item, index) => (
                <tr key={index}>
                  <td className="text-black">{item.account}</td>
                  <td className="text-black">{item.dueDate}</td>
                  <td className="text-black">{item.amount}</td>
                  <td className="flex gap-4 justify-center">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />

          {/*  Edit Modal */}
          {editModalOpen && editingOrder && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded">
                <form onSubmit={handleSubmit(handleEditSubmit)}>
                  <label className="block mb-2">
                    Account:
                    <input
                      type="text"
                      {...register("account", { required: true })}
                      defaultValue={editingOrder.account}
                      className="block w-full p-2 border border-gray-300 border-solid rounded mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Due Date:
                    <input
                      type="text"
                      {...register("dueDate", { required: true })}
                      defaultValue={editingOrder.dueDate}
                      className="block w-full p-2 border border-gray-300 border-solid rounded mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Amount:
                    <input
                      type="number"
                      {...register("amount", { required: true })}
                      defaultValue={editingOrder.amount}
                      className="block w-full p-2 border border-gray-300 border-solid rounded mt-1"
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2"
                    onClick={() => {
                      setEditModalOpen(false);
                      setEditingOrder(null);
                      reset();
                    }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const Pagination = ({ page, setPage, pageCount }) => {
  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        className={`px-4 py-2 rounded-
        md ${page === 0 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        disabled={page === 0}
        onClick={() => setPage(Math.max(0, page - 1))}
      >
        Previous
      </button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            className={`px-4 py-2 rounded-md ${
              pageNumber === page + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setPage(pageNumber - 1)}
          >
            {pageNumber}
          </button>
        )
      )}

      <button
        className={`px-4 py-2 rounded-md ${
          page === pageCount - 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
        disabled={page === pageCount - 1}
        onClick={() => setPage(Math.min(pageCount - 1, page + 1))}
      >
        Next
      </button>
    </div>
  );
};
