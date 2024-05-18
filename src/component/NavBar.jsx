import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { auth } from '../component/firebase';
import { GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const navigation = [
    { name: 'Chat App', href: '#', current: true },
    // { name: 'Team', href: '#', current: false },
    // { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NavBar = () => {


    const [user] = useAuthState(auth);
    console.log("userNavbar", user)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        console.log("provider", provider)
        // signInWithRedirect(auth, provider);
        signInWithPopup(auth, provider);
    };
    const signOut = () => {
        auth.signOut();
    };


    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <a className={classNames('bg-gray-900 text-white', 'rounded-md px-3 py-2 text-sm font-medium')} aria-current={'page'}> CHAT APP    </a>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>

                                        {user ? <>
                                            <button onClick={signOut}  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white" type="button">
                                            Sign Out
                                            </button>
                                        </> :
                                            <img
                                                className="h-8 w-36 cursor-pointer "
                                                src='./img/btn_google_sign_in.png'
                                                alt="Google Sign In"
                                                onClick={() => googleSignIn()}
                                            />}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar
