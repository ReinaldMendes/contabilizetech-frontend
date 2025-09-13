"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface EditContextType {
  isEditMode: boolean;
  setEditMode: (enabled: boolean) => void;
  editingElement: string | null;
  setEditingElement: (elementId: string | null) => void;
  hasUnsavedChanges: boolean;
  setHasUnsavedChanges: (hasChanges: boolean) => void;
  saveChanges: () => Promise<void>;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

interface EditProviderProps {
  children: ReactNode;
}

export function EditProvider({ children }: EditProviderProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingElement, setEditingElement] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const setEditMode = (enabled: boolean) => {
    setIsEditMode(enabled);
    if (!enabled) {
      setEditingElement(null);
    }
  };

  const saveChanges = async (): Promise<void> => {
    try {
      // Simulate API call to save changes
      await new Promise(resolve => setTimeout(resolve, 1000));
      setHasUnsavedChanges(false);
      console.log('Changes saved successfully');
    } catch (error) {
      console.error('Failed to save changes:', error);
      throw error;
    }
  };

  return (
    <EditContext.Provider value={{
      isEditMode,
      setEditMode,
      editingElement,
      setEditingElement,
      hasUnsavedChanges,
      setHasUnsavedChanges,
      saveChanges
    }}>
      {children}
    </EditContext.Provider>
  );
}

export function useEdit() {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
}