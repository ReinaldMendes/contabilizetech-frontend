"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ScheduleModal } from "./ScheduleModal";
import Image from 'next/image'; // 1. Import do componente Image do Next.js
import Link from 'next/link';   // 2. Import do componente Link do Next.js

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* 1. Uso do componente Image otimizado */}
            <Image 
              src="/img/contabilizetech_logo.png" // Assumindo que a imagem está em public/images/
              alt="ContabilizeTech Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-brand-dark">
              Contabilize<span className="text-brand-teal">Tech</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Serviços
            </a>
            <a 
              href="#quem-somos" 
              className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quem Somos
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 2. Uso do Link do Next.js com a prop 'href' */}
            <Link href="/admin/login">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-brand-dark hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-300"
              >
                Login
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="bg-brand-gradient hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => setIsScheduleModalOpen(true)}
            >
              Agende uma demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-dark" />
            ) : (
              <Menu className="h-6 w-6 text-brand-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#services" /* ... */ >Serviços</a>
              <a href="#quem-somos" /* ... */ >Quem Somos</a>
              <a href="#contact" /* ... */ >Contato</a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link href="/admin/login">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="justify-start text-brand-dark hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Button 
                  size="sm" 
                  className="bg-brand-gradient hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsScheduleModalOpen(true)}
                >
                  Agende uma demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      <ScheduleModal 
        open={isScheduleModalOpen} 
        onOpenChange={setIsScheduleModalOpen} 
      />
    </header>
  );
}