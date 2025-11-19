import { Mail, Github, Linkedin, Twitter } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="min-h-screen px-6 md:px-12 py-24 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="flex items-start gap-3 mb-8">
              <span className="block w-2 h-2 rounded-full bg-foreground mt-3 flex-shrink-0" />
              <h2 className="text-lg md:text-xl">Contact</h2>
            </div>
          </div>

          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-12">
              Let's connect and create something meaningful together.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-lg hover:opacity-70 transition-opacity group">
                <Mail className="w-5 h-5" />
                <span className="font-medium">placeholder@gmail.com</span>
              </a>

              <div className="flex gap-6 pt-6 border-t border-border">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;