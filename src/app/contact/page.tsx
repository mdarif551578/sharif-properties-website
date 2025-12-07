'use client';

import { ContactForm } from "@/components/contact-form";
import Head from 'next/head';
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Sharif Properties</title>
        <meta name="description" content="Get in touch with Sharif Properties for expert advice on buying or selling luxury real estate in Dhaka. Contact us by phone, email, or visit our office." />
        <meta property="og:title" content="Contact Us - Sharif Properties" />
        <meta property="og:description" content="Reach out to the leading real estate experts in Dhaka. We're here to assist with all your property needs, from luxury apartments to commercial spaces." />
        <meta property="og:url" content="https://www.sharifproperties.com/contact" />
      </Head>
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
                 <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    123 Luxury Lane, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24">
              <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                  Our Location
              </h2>
              <div className="overflow-hidden rounded-lg border shadow-lg">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9322105468946!2d90.39804287440886!3d23.785428187432476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71d29847379%3A0x2ae4d70f63ad2cc1!2sSharif%20Properties%20Service!5e0!3m2!1sen!2sbd!4v1765111128686!5m2!1sen!2sbd" 
                      width="100%" 
                      height="450" 
                      style={{border:0}} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sharif Properties Location on Google Maps"
                  ></iframe>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
