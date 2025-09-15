"use client";

import { useState, useEffect, FormEvent } from "react";
import { usersAPI } from "@/utils/api";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { UserPlus, Loader2, Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Definindo o tipo User para clareza
type User = {
  _id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMINISTRATOR';
};

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Novo estado para rastrear quem está sendo editado
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'ADMINISTRATOR' as 'USER' | 'ADMINISTRATOR'
  });

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await usersAPI.getAll();
      setUsers(response.data);
    } catch (error) {
      toast.error("Erro ao carregar usuários.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Popula o formulário quando um usuário é selecionado para edição
  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        password: '', // Senha não deve ser preenchida na edição
        role: editingUser.role
      });
    } else {
      // Reseta para o formulário de criação
      setFormData({ name: '', email: '', password: '', role: 'ADMINISTRATOR' });
    }
  }, [editingUser]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOpenCreateModal = () => {
    setEditingUser(null); // Garante que não estamos em modo de edição
    setIsModalOpen(true);
  };
  
  const handleOpenEditModal = (user: User) => {
    setEditingUser(user); // Define quem estamos editando
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingUser) {
        // --- MODO DE EDIÇÃO ---
        const updateData = { name: formData.name, email: formData.email, role: formData.role };
        await usersAPI.update(editingUser._id, updateData);
        toast.success("Usuário atualizado com sucesso!");
      } else {
        // --- MODO DE CRIAÇÃO ---
        await usersAPI.create(formData);
        toast.success("Novo administrador criado com sucesso!");
      }
      setIsModalOpen(false);
      fetchUsers();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Ocorreu um erro.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="text-center"><Loader2 className="h-8 w-8 animate-spin mx-auto" /></div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-brand-dark">Gerenciar Administradores</h1>
        <Button onClick={handleOpenCreateModal} className="bg-brand-gradient">
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Admin
        </Button>
      </div>
      
      {/* Lista de Usuários */}
      <div className="space-y-4">
        {users.map(user => (
          <div key={user._id} className="p-4 border rounded-lg flex justify-between items-center bg-white shadow-sm">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => handleOpenEditModal(user)}>
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </div>
        ))}
      </div>

      {/* Modal de Criar/Editar */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingUser ? 'Editar Usuário' : 'Cadastrar Novo Administrador'}</DialogTitle>
            <DialogDescription>
              {editingUser ? 'Altere os dados do usuário abaixo.' : 'Preencha os dados para criar um novo usuário.'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div><Label htmlFor="name">Nome</Label><Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required /></div>
            <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required /></div>
            {!editingUser && (
              <div><Label htmlFor="password">Senha</Label><Input id="password" type="password" value={formData.password} onChange={(e) => handleInputChange("password", e.target.value)} required /></div>
            )}
            <div>
              <Label htmlFor="role">Permissão</Label>
              <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMINISTRATOR">Administrador</SelectItem>
                  <SelectItem value="USER">Usuário Comum</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button type="button" variant="outline">Cancelar</Button></DialogClose>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Salvando...' : 'Salvar'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}