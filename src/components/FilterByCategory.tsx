import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
export default function FilterByCategory() {
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "filter-category", payload: { id: e.target.value } });
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-cl md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filter Expenses</label>
          <select
            id="category"
            className=" bg-slate-100 p-3 flex-14 rounded"
            onChange={handleChange}
          >
            <option value="">All Category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
