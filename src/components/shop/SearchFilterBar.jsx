import { Search } from 'lucide-react'
import Select from '../common/Select.jsx'

const SearchFilterBar = ({
    search,
    setSearch,
    category,
    setCategory,
    categoryOptions,
    sort,
    setSort,
    sortOptions,
}) => {
    return (
        <div className="border rounded-3xl p-3 flex flex-col md:flex-row gap-3">
            <div className="relative flex-1 flex items-center justify-center">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-text-muted/10 border border-border rounded-2xl pl-11 pr-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors text-[15px]"
                />
            </div>

            <Select
                options={categoryOptions}
                value={category}
                onChange={setCategory}
                className="md:w-56"
            />

            <Select options={sortOptions} value={sort} onChange={setSort} className="md:w-56" />
        </div>
    )
}

export default SearchFilterBar