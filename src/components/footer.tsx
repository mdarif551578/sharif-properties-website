import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <Building2 className="h-7 w-7 text-accent" />
                <span className="text-xl font-bold">Sharif Properties</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Your partner in finding luxury real estate.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/properties" className="text-sm hover:text-accent transition-colors">Properties</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
             <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>123 Luxury Lane, Beverly Hills, CA 90210</li>
                <li>(123) 456-7890</li>
                <li>contact@sharifproperties.com</li>
             </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Sharif Properties Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
