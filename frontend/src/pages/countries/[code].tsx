import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "@/graphql/CountryQueries";

const CountryDetails = () => {
    const router = useRouter();
    const { code } = router.query;

    const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
        variables: { code },
    });

    if (loading) return <p>Loading country...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const country = data.country;

    return (
        <div className="flex align-center justify-center mt-10">
            <div className="flex flex-col align-center justify-center p-10">
                <p className="text-center text-[10rem]">{country?.emoji}</p>
                <h1 className="text-xl mb-2 text-center">Name: {country?.name} ({country?.code})</h1>
                <p className="text-xl text-center">Continent: {country?.continent?.name}</p>
            </div>
        </div>
    );

};

export default CountryDetails;