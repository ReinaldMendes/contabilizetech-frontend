"use client";

import { useState, useRef } from 'react';
import { Camera, Upload, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useEdit } from '../src/contexts/EditContext';
import { useAuth } from '../src/contexts/AuthContext';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onSave?: (newSrc: string) => void;
  id: string;
}

export function EditableImage({ 
  src, 
  alt, 
  className = '', 
  onSave, 
  id 
}: EditableImageProps) {
  const { isAuthenticated } = useAuth();
  const { 
    isEditMode, 
    editingElement, 
    setEditingElement, 
    setHasUnsavedChanges 
  } = useEdit();
  
  const [isHovered, setIsHovered] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(src);
  const [originalSrc, setOriginalSrc] = useState(src);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditing = editingElement === id;
  const showEditIcon = isAuthenticated && isEditMode && isHovered && !isEditing;

  const handleStartEdit = () => {
    setOriginalSrc(src);
    setPreviewSrc(src);
    setEditingElement(id);
    setShowUploadDialog(true);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Arquivo muito grande. Máximo permitido: 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (previewSrc !== originalSrc) {
      setHasUnsavedChanges(true);
      if (onSave) {
        onSave(previewSrc);
      }
    }
    setShowUploadDialog(false);
    setEditingElement(null);
  };

  const handleCancel = () => {
    setPreviewSrc(originalSrc);
    setShowUploadDialog(false);
    setEditingElement(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div
        className={`relative group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={src} 
          alt={alt} 
          className={`${className} ${isEditing ? 'ring-2 ring-brand-teal' : ''}`}
        />
        
        {showEditIcon && (
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <Button
              size="sm"
              onClick={handleStartEdit}
              className="bg-brand-teal hover:bg-brand-dark-blue shadow-lg"
            >
              <Camera className="h-4 w-4 mr-2" />
              Editar Imagem
            </Button>
          </div>
        )}
      </div>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Editar Imagem</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Preview */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              {previewSrc ? (
                <div className="space-y-3">
                  <img 
                    src={previewSrc} 
                    alt="Preview" 
                    className="max-h-48 mx-auto rounded"
                  />
                  <p className="text-sm text-gray-600">Preview da nova imagem</p>
                </div>
              ) : (
                <div className="py-8">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Nenhuma imagem selecionada</p>
                </div>
              )}
            </div>

            {/* Upload Button */}
            <div className="space-y-2">
              <Button 
                onClick={handleUploadClick}
                variant="outline"
                className="w-full"
              >
                <Upload className="h-4 w-4 mr-2" />
                Selecionar Nova Imagem
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Formatos aceitos: JPG, PNG, GIF (máx. 5MB)
              </p>
            </div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Action buttons */}
            <div className="flex space-x-2">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="flex-1"
              >
                <X className="h-4 w-4 mr-2" />
                Cancelar
              </Button>
              <Button
                onClick={handleSave}
                className="flex-1 bg-brand-gradient"
                disabled={previewSrc === originalSrc}
              >
                <Check className="h-4 w-4 mr-2" />
                Salvar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}