import { ChangeEvent, useContext, useState } from 'react';
import { MoviesContext } from '../../context';
import { Filters } from '../../models';

const initFilter = {
    name: ''
}

export const FiltersList = () => {

    const { searchMovies, getAll } = useContext(MoviesContext);

    const [filters, setFilters] = useState<Filters>(initFilter);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setFilters((prev) => ({ ...prev, name: value }));
    };

    const handleButtonClick = () => {
        filters?.name ? search({ filtersToSearch: filters }) : getAll();
    }

    const handleButtonReset = () => {
        setFilters((prev) => ({ ...prev, name: '' }));
        getAll();
    }

    const search = ({ filtersToSearch }: { filtersToSearch: Filters }) => {
        searchMovies({ filters: filtersToSearch });
    };

    return (
        <section className="flex justify-center p-8 bg-tertiary">
            <form className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Movie name"
                    className="m-0 rounded-lg px-4 py-2 font-bold border border-solid border-secondary bg-transparent text-primary w-100"
                    name="name"
                    value={filters.name}
                    onChange={handleInputChange}
                />

                <button
                    type="button"
                    className="rounded-lg border-0 shadow-inner box-border text-primary bg-primary-hover outline-none overflow-hidden px-6 text-center hover:bg-primary-hover-accent"
                    onClick={handleButtonClick}
                >
                    Search
                </button>

                <button
                    type="button"
                    className="rounded-lg border-0 shadow-inner box-border text-primary bg-primary-hover outline-none overflow-hidden px-6 text-center hover:bg-primary-hover-accent"
                    onClick={handleButtonReset}
                >
                    Clear filters
                </button>
            </form>
        </section>
    )
}
