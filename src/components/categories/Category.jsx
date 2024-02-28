/* eslint-disable react/prop-types */
export const Category = ({ category }) => {
  return (
    <div className="items-center justify-start flex  cursor-pointer py-[12px] px-[7px] border-b hover:bg-gray-200  border-gray-300 ">
      <h2 className="font-medium text-xs leading-[14px] text-gray-500 cursor-pointer ">
        {category}
      </h2>
    </div>
  );
};
