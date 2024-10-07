import Link from "next/link";
import type { Country } from "@/types/countryType";
import { GET_ALL_COUNTRIES } from "@/graphql/CountryQueries";
import { useQuery } from "@apollo/client";

const Countries = () => {
    const { data, loading, error } = useQuery(GET_ALL_COUNTRIES);

    if (loading) return <p>Loading countries...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const allCountries: Country[] = data.countries;

    return (
        <div className="flex align-center justify-center mt-10 m-4">
            <ul className="flex flex-wrap justify-center align-center">
                {allCountries.map((country: Country) => (
                <li key={country.id} className="w-24 h-20 flex flex-col justify-center align-center m-2 border-2 border-gray rounded-md hover:bg-gray-300">
                    <Link href={`/countries/${country.code}`}>
                        <div>
                            <p className="text-center">{country.name}</p>
                            <p className="text-center">{country.emoji}</p>
                        </div>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Countries;