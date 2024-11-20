import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const Breadcrums = () => {
    return (
        <nav className="bg-grey-light max-w-7xl m-auto rounded-md p-4">
            <ol className="list-reset text-xs flex sm:px-0">
                <li>
                    <a
                        href="#"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >
                        Home
                    </a>
                </li>
                <li className='flex items-center'>
                    <FaAngleRight className="mx-2 text-neutral-500 dark:text-neutral-400" />
                </li>
                <li>
                    <a
                        href="#"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >
                        bharat-benz
                    </a>
                </li>
                <li className='flex items-center'>
                    <FaAngleRight className="mx-2 text-neutral-500 dark:text-neutral-400" />
                </li>
                <li className="text-[rgba(36,39,44,.3)] dark:text-neutral-400">2826R</li>
            </ol>
        </nav>

    )
}

export default Breadcrums;