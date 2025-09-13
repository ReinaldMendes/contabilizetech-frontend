"use client";

import { useState, useRef, useEffect } from 'react';
import { Edit3, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useEdit } from '../src/contexts/EditContext';
import { useAuth } from '../src/contexts/AuthContext';

interface EditableTextProps {
  children: React.ReactNode;
  id: string;
  type?: 'text' | 'textarea';
  className?: string;
  placeholder?: string;
  onSave?: (value: string) => void;
}

export function EditableText({ 
  children, 
  id, 
  type = 'text', 
  className = '', 
  placeholder = 'Digite o texto...',
  onSave
}: EditableTextProps) {
  const { isAuthenticated } = useAuth();
  const { 
    isEditMode, 
    editingElement, 
    setEditingElement, 
    setHasUnsavedChanges 
  } = useEdit();
  
  const [isHovered, setIsHovered] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [originalValue, setOriginalValue] = useState('');
  const textRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const isEditing = editingElement === id;
  const showEditIcon = isAuthenticated && isEditMode && isHovered && !isEditing;

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const extractTextContent = (element: React.ReactNode): string => {
    if (typeof element === 'string') {
      return element;
    }
    if (typeof element === 'number') {
      return element.toString();
    }
    if (React.isValidElement(element)) {
      if (element.props.children) {
        return extractTextContent(element.props.children);
      }
    }
    if (Array.isArray(element)) {
      return element.map(extractTextContent).join(' ');
    }
    return '';
  };

  const handleStartEdit = () => {
    const currentText = extractTextContent(children);
    setOriginalValue(currentText);
    setEditValue(currentText);
    setEditingElement(id);
  };

  const handleSave = () => {
    if (editValue !== originalValue) {
      setHasUnsavedChanges(true);
      if (onSave) {
        onSave(editValue);
      }
    }
    setEditingElement(null);
  };

  const handleCancel = () => {
    setEditValue(originalValue);
    setEditingElement(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type === 'text') {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    const InputComponent = type === 'textarea' ? Textarea : Input;
    
    return (
      <div className="relative">
        <InputComponent
          ref={inputRef as any}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`${className} border-2 border-brand-teal bg-brand-light/50`}
          rows={type === 'textarea' ? 4 : undefined}
        />
        <div className="absolute -right-2 -top-2 flex space-x-1">
          <Button
            size="sm"
            onClick={handleSave}
            className="h-6 w-6 p-0 bg-green-600 hover:bg-green-700"
          >
            <Check className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={handleCancel}
            className="h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={textRef}
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {showEditIcon && (
        <Button
          size="sm"
          onClick={handleStartEdit}
          className="absolute -right-2 -top-2 h-6 w-6 p-0 bg-brand-teal hover:bg-brand-dark-blue opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
        >
          <Edit3 className="h-3 w-3 text-white" />
        </Button>
      )}
    </div>
  );
}