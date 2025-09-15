"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useEdit } from '@/contexts/EditContext';
import { partnersAPI } from '@/utils/api';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { PlusCircle, Trash2, Loader2, Upload } from 'lucide-redact';
import { EditableText } from './EditableText';

type Partner = {
  _id: string;
  name: string;
  imageUrl: string;
};

export function Partners() {
  const { isAdmin } = useAuth();
  const { isEditMode } = useEdit();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Estado para o modal de adição
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPartnerName, setNewPartnerName] = useState('');
  const [newPartnerFile, setNewPartnerFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchPartners = async () => {
    try {
      const response = await partnersAPI.getAll();
      setPartners(response.data);
    } catch (error) {
      console.error("Erro ao buscar parceiros:", error);
      toast.error("Não foi possível carregar os parceiros.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleAddPartner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPartnerFile || !newPartnerName) {
      toast.error("Nome e logo são obrigatórios.");
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', newPartnerName);
    formData.append('logoFile', newPartnerFile);

    try {
      await partnersAPI.create(formData);
      toast.success("Parceiro adicionado com sucesso!");
      setIsModalOpen(false);
      setNewPartnerName('');
      setNewPartnerFile(null);
      fetchPartners(); // Recarrega a lista
    } catch (error) {
      toast.error("Erro ao adicionar parceiro.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePartner = async (id: string) => {
    if (!window.confirm("Tem certeza que deseja remover este parceiro?")) return;

    try {
      await partnersAPI.delete(id);
      toast.success("Parceiro removido com sucesso!");
      fetchPartners(); // Recarrega a lista
    } catch (error) {
      toast.error("Erro ao remover parceiro.");
    }
  };

  const extendedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            <EditableText contentKey="partners.title" fallback="Empresas que Confiam na Gente" />
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            <EditableText contentKey="partners.description" fallback="Parceiros que escolheram a ContabilizeTech para impulsionar seus negócios com soluções contábeis e estratégicas de excelência." type="textarea" />
          </p>
          {isAdmin && isEditMode && (
            <Button onClick={() => setIsModalOpen(true)} className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Adicionar Parceiro
            </Button>
          )}
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll group">
            {extendedPartners.map((partner, index) => (
              <div key={`${partner._id}-${index}`} className="relative flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm">
                <Image src={partner.imageUrl} alt={partner.name} fill style={{ objectFit: 'contain' }} className="px-4" />
                {isAdmin && isEditMode && (
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-7 w-7 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleDeletePartner(partner._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para adicionar novo parceiro */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Adicionar Novo Parceiro</DialogTitle></DialogHeader>
          <form onSubmit={handleAddPartner} className="space-y-4">
            <div><Label htmlFor="partnerName">Nome do Parceiro</Label><Input id="partnerName" value={newPartnerName} onChange={(e) => setNewPartnerName(e.target.value)} required /></div>
            <div><Label htmlFor="partnerLogo">Arquivo do Logo</Label><Input id="partnerLogo" type="file" onChange={(e) => setNewPartnerFile(e.target.files?.[0] || null)} required /></div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Salvando...' : 'Salvar Parceiro'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}