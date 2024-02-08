import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import DarkModeSwitch from "./DarkModeSwitch";
import {useNavigate} from "react-router-dom";

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

const data = {
    userId: "kjsdfbgsjdfhglksdfgbjvkldfnb",
    profileUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    firstName: "Tom",
    lastName: "Cook",
}

export default function Header() {
    const navigate = useNavigate();

    function signOut() {
        console.log(`Signing out userId=${data.userId}`);
        navigate("/");
    }

    return (
        <Disclosure as="nav" className="background-secondary">
            {() => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex justify-start">
                                <div className="flex items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://cdn-icons-png.flaticon.com/512/5065/5065589.png"
                                        alt="Task Manager"
                                    />
                                    <h3 className="font-bold font-sans site-name">Task Manager</h3>
                                </div>
                            </div>
                            <div className="flex flex-1 absolute inset-y-0 right-0 justify-end items-center sm:static sm:inset-auto sm:ml-6">
                                <DarkModeSwitch />

                                <Menu as="div" className="relative ml-5 mr-2 ">
                                    <Menu.Button className="pointer relative flex flex-row items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={data.profileUrl}
                                            alt=""
                                        />
                                        <span className="ml-3 block text-sm font-medium leading-6">
                                            <span>{data.firstName}</span>
                                            <span> </span>
                                            <span>{data.lastName}</span>
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="border absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/profile"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        onClick={signOut}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
