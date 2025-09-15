"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Edit3, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useEdit } from '@/contexts/EditContext';
import { useContent } from '@/contexts/ContentContext';
import { useAuth } from '@/contexts/AuthContext';

interface EditableTextProps {
  contentKey: string;
  fallback?: string;
  type?: 'text' | 'textarea';
  className?: string;
  placeholder?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function EditableText({ 
  contentKey,
  fallback = '',
  type = 'text',
  className = '',
  placeholder = 'Digite o texto...',
  as: Component = 'span'
}: EditableTextProps) {
  const { isAdmin } = useAuth();
  const { content } = useContent();
  const { isEditMode, updateChange } = useEdit();
  
  const currentValue = content[contentKey] || fallback;

  // Estados locais para gerenciar a edição
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(currentValue);
  const [isInsideButton, setIsInsideButton] = useState(false);
  
  const textRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Sincroniza o valor caso o conteúdo seja recarregado
  useEffect(() => {
    setEditValue(content[contentKey] || fallback);
  }, [content, contentKey, fallback]);

  // Lógica para detectar se o componente está dentro de um botão
  useEffect(() => {
    if (textRef.current) {
      if (textRef.current.closest('button')) {
        setIsInsideButton(true);
      }
    }
  }, []);

  // Foca no input quando a edição local começa
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleStartEdit = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsEditing(true);
  }, []);

  const handleConfirmChange = useCallback(() => {
    if (editValue !== currentValue) {
      updateChange(contentKey, editValue);
    }
    setIsEditing(false);
  }, [editValue, currentValue, contentKey, updateChange]);

  const handleCancel = useCallback(() => {
    setEditValue(currentValue);
    setIsEditing(false);
  }, [currentValue]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type === 'text') {
      e.preventDefault();
      handleConfirmChange();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  }, [type, handleConfirmChange, handleCancel]);

  // --- LÓGICA DE RENDERIZAÇÃO ---

  // Se o modo de edição global NÃO está ativo, renderiza o texto simples
  if (!isEditMode || !isAdmin) {
    return <Component className={className}>{currentValue}</Component>;
  }

  // Se a edição LOCAL está ativa (mostrando o input/textarea)
  if (isEditing) {
    const InputComponent = type === 'textarea' ? Textarea : Input;
    return (
      <div className="flex items-center gap-2 not-prose">
        <InputComponent
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleConfirmChange}
          placeholder={placeholder}
          className="border-2 border-brand-teal bg-white text-black"
          rows={type === 'textarea' ? 4 : undefined}
        />
        <Button size="icon" onClick={handleConfirmChange} className="bg-green-600 hover:bg-green-700 h-8 w-8 flex-shrink-0">
          <Check className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="destructive" onClick={handleCancel} className="h-8 w-8 flex-shrink-0">
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Se o modo de edição global está ATIVO, mas a edição local NÃO
  return (
    <Component
      ref={textRef as any}
      className={`relative group ${className}`}
      // Se estiver dentro de um botão, o clique no texto inicia a edição
      onClick={isInsideButton ? handleStartEdit : undefined} 
      style={isInsideButton ? { cursor: 'pointer' } : {}}
      title={isInsideButton ? 'Clique para editar' : ''}
    >
      {currentValue}
      {/* Só mostra o ícone flutuante se NÃO estiver dentro de um botão */}
      {!isInsideButton && (
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={handleStartEdit}
          className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit3 className="h-4 w-4 text-white" />
        </Button>
      )}
    </Component>
  );
}