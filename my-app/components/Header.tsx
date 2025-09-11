"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ScheduleModal } from "./ScheduleModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-brand-gradient"></div>
            <span className="text-xl font-semibold text-brand-dark">ContabilizeTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
              Serviços
            </Link>
            <Link href="#plans" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
              Planos
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
              Sobre
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
              Contato
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-brand-dark hover:text-brand-teal">
              Login
            </Button>
            <Button 
              size="sm" 
              className="bg-brand-gradient hover:opacity-90"
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
              <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
                Serviços
              </Link>
              <Link href="#plans" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
                Planos
              </Link>
              <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
                Sobre
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors">
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start text-brand-dark hover:text-brand-teal">
                  Login
                </Button>
                <Button 
                  size="sm" 
                  className="bg-brand-gradient hover:opacity-90"
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
