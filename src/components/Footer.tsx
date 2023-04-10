import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (   
        <footer className="bg-white dark:bg-gray-900 absolute bottom-0">
            <div className="w-screen p-4 py-6 lg:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Stella Tetradis. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href='https://twitter.com/st3lz' target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <AiOutlineTwitter className="w-5 h-5"/>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href='https://github.com/stetradis' target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <AiFillGithub className="w-5 h-5"/>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>   
    )
}

export default Footer;