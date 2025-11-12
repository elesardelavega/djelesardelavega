import { ContactInfoCard } from "./ContactInfoCard"
import { ContactFormCard } from "./ContactFormCard"

const ContactForm: React.FC = () => {
    return (
        <section className="w-full py-10 bg-[hsl(var(--background))]" id="contacto">
            <div className="mx-auto max-w-[1440px] px-8
                grid gap-8 items-start
                grid-cols-1
                lg:grid-cols-[1fr_3fr]
                xl:grid-cols-[1fr_2fr]">
                <ContactInfoCard />
                <ContactFormCard />
            </div>
        </section>
    )
}

export default ContactForm
