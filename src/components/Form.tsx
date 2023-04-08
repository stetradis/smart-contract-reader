import { useState } from "react";

const Form = () => {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    return (
        <section id="code-form" className='m-10'>
            <div className="flex flex-row">
                <form className="basis-1/2">
                    <div className="mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="code" className="sr-only">Insert code</label>
                            <textarea id="code" rows={20} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Insert your code..." required></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Scan Code
                            </button>
                        </div>
                    </div>
                </form>
                <div className="basis-1/2 text-white pl-6">
                    
                </div>
            </div>       
        </section>
    );
}

export default Form;