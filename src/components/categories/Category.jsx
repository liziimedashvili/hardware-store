/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Category({ category, onSelectCategory }) {
  const handleClick = () => {
    onSelectCategory(category.name);
  };
  return (
    <div onClick={handleClick}>
      <div className=" cursor-pointer py-[9px] px-[7px] border-b hover:bg-gray-200 shadow-md border-gray-300">
        <span className="font-medium text-xs leading-[14px] text-gray-500 ">
          {category.name}
        </span>
      </div>
    </div>
  );
}
