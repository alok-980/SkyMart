import { Search, X } from 'lucide-react'
import Select from '../common/Select.jsx'
import { useContext } from 'react'
import { MyStore } from '../../context/ProductContext.jsx'

const SearchFilterBar = ({ search, setSearch, category, setCategory, sort, setSort }) => {
    const { categoryOptions, sortOptions } = useContext(MyStore)

    const hasActiveFilters =
        category !== 'All Categories' || sort !== 'Featured' || search !== ''

    const clearAll = () => {
        setSearch('')
        setCategory('All Categories')
        setSort('Featured')
    }

    return (
        <div className="border rounded-3xl p-3">
            <div className="flex flex-col md:flex-row gap-3">
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

                {hasActiveFilters && (
                    <button
                        onClick={clearAll}
                        className="flex items-center justify-center gap-1.5 text-red-400 border border-red-900/50 bg-red-500/10 rounded-2xl px-4 py-2.5 text-sm font-medium hover:bg-red-500/20 transition-colors shrink-0 cursor-pointer"
                    >
                        <X size={14} />
                        Clear
                    </button>
                )}
            </div>

            {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-border">
                    {category !== 'All Categories' && (
                        <span className="flex items-center justify-center gap-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1 text-xs font-medium">
                            {category}
                            <button onClick={() => setCategory('All Categories')} className='cursor-pointer'>
                                <X size={12} />
                            </button>
                        </span>
                    )}

                    {sort !== 'Featured' && (
                        <span className="flex items-center gap-1.5 bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1 text-xs font-medium">
                            {sort}
                            <button onClick={() => setSort('Featured')} className='cursor-pointer'>
                                <X size={12} />
                            </button>
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchFilterBar