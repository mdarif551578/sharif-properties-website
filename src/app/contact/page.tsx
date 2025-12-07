import { ContactForm } from "@/components/contact-form";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We're here to help you find your perfect property. Whether you have a question about a listing or want to discuss your needs, our team is ready to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <a href="tel:+1234567890" className="text-lg text-foreground hover:text-accent transition-colors">(123) 456-7890</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <a href="mailto:contact@sharifproperties.com" className="text-lg text-foreground hover:text-accent transition-colors">contact@sharifproperties.com</a>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
