"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useRef } from "react";
import helloMessages from "./helloMessages.json";

export default function ContactPage() {
  const [hello, setHello] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (Array.isArray(helloMessages) && helloMessages.length > 0) {
      const randomIndex = Math.floor(Math.random() * helloMessages.length);
      setHello(helloMessages[randomIndex]);
    }
  }, []);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Kontakt</h1>

      <p className="mb-2 text-center max-w-xl text-accent font-semibold text-lg min-h-[2.5rem]">
        {hello}
      </p>

      <p className="mb-8 text-center max-w-xl text-muted-foreground">
        Masz pytania lub chcesz się z nami skontaktować? Wypełnij poniższy
        formularz, a odpowiemy najszybciej jak to możliwe.
      </p>
      <form className="w-full max-w-md bg-card p-8 rounded-2xl shadow-lg flex flex-col gap-6 border border-muted/60">
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-foreground/90">
            Imię i nazwisko
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition placeholder:text-muted-foreground/70 text-foreground/90 shadow-sm"
            placeholder="Twoje imię i nazwisko"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-foreground/90">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition placeholder:text-muted-foreground/70 text-foreground/90 shadow-sm"
            placeholder="Twój adres email"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-foreground/90">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            ref={textareaRef}
            required
            rows={2}
            className="overflow-y-hidden w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition placeholder:text-muted-foreground/70 text-foreground/90 shadow-sm resize-none min-h-[90px]"
            placeholder="Treść wiadomości..."
            onInput={handleInput}
          />
        </div>
        <Button type="submit" className="w-full mt-2 bg-accent text-accent-foreground font-semibold shadow-md hover:shadow-lg transition">
          Wyślij
        </Button>
      </form>
    </div>
  );
}
