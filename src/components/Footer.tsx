import { Button } from "./ui/Button"

const Footer = () => {
    return (
        <div className="flex w-full fixed justify-between items-center place-content-between z-10  bottom-0 left-0">
            <Button variant="link" className="font-black text-2xl">
                sobre
            </Button>
            <a href="/contactos">
                <Button variant="link" className="font-black text-2xl">
                    contactos
                </Button>
            </a>
        </div>
    )
}

export default Footer