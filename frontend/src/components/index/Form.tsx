import Link from "next/link";
import { CREATE_NEW_COUNTRY } from "@/graphql/CountryMutations";
import { gql, useMutation } from "@apollo/client";
import { useContext, useState } from "react";

const Form = () => {
    const [addCountry, { data }] = useMutation(CREATE_NEW_COUNTRY);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    return (
        <div className="flex flex-col align-center justify-center">
            <div className="flex align-center justify-center bg-gray-200 rounded-md p-10 border-2 border-gray-300">
                <form className="flex-wrap flex align-center justify-center" onSubmit={async (e) => {
                    e.preventDefault();

                    setError("");
                    setSuccess("");
                    
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    const formJson = Object.fromEntries(formData.entries());
                    try {
                        await addCountry({ variables: { data: formJson } });
                        setSuccess("Country added successfully!");
                        form.reset();
                    } catch (error) {
                        setError(`Error adding country: ${error}`);
                    }
                }}>
                    <div className="flex flex-col mx-4">
                        <label htmlFor="name">Country Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="flex flex-col mx-4">
                        <label htmlFor="emoji">Country Emoji</label>
                        <input type="text" id="emoji" name="emoji" required />
                    </div>
                    <div className="flex flex-col mx-4">
                        <label htmlFor="code">Country Code</label>
                        <input type="text" id="code" name="code" required />
                    </div>
                    <button type="submit" className="mx-4 border-2 bg-[#f7146b] text-white rounded-md p-2 hover:bg-[#db0959] transition duration-300">
                        Add Country
                    </button>
                </form>
            </div>
            <>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </>
        </div>
    );
}

export default Form;