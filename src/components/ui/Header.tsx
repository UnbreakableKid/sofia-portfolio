import { useState, useEffect } from "react"
import { Button } from "./Button"
import ThemeToggle from "./ThemeToggle"

const Header = () => {

    const [fontStyle, setFontStyle] = useState("font-black")
    useEffect(() => {
        const fontStyles = ["font-sans", "font-serif", "font-mono"]
        const randomFontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)]
        setFontStyle(randomFontStyle)
    }, [])

    return (
        <div className="flex w-full fixed justify-between items-center place-content-between z-10 top-0 left-0">
            <a href="/">
                <Button
                    variant="link"
                    size="lg"
                    className={`w-fit text-4xl h-fit ${fontStyle}`}
                    id="logo"
                >
                    S
                </Button>
            </a>
            <ThemeToggle />
        </div>
    )
}

export default Header