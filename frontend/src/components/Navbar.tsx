import { useState } from "react"
import { CiDark } from "react-icons/ci";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

export const Navbar = () => {

    const [ showSheet, setShowSheet ] = useState<boolean>(false);
    const [ changeTheme, setChangeTheme ] = useState<string>("light");

    return (
        <header className="grid place-items-center">
            <nav className="flex justify-between">
                <div>
ssdcfsdcs
                </div>
                <div>
                    <div onClick={() => setChangeTheme(changeTheme == "light" ? "dark" : "light")}>
                        {
                            changeTheme == "light" ?
                            <MdDarkMode /> :
                            <CiDark />

                        }
                    </div>
                    <div
                        onClick={() => setShowSheet(!showSheet)}
                    >
                        {
                            showSheet ?
                            <HiMenuAlt1 /> :
                            <HiMenuAlt3 />
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}