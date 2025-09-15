"use client";

import { useState } from 'react';
import { Settings, Edit3, Move, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from './ui/dropdown-menu';
const { isEditMode } = useEdit();
import { useAuth } from '../src/contexts/AuthContext';

interface EditableSectionProps {
  children: React.ReactNode;
  id: string;
  title: string;
  className?: string;
  onEdit?: () => void;
  onMove?: (direction: 'up' | 'down') => void;
  onToggleVisibility?: () => void;
  isVisible?: boolean;
}

export function EditableSection({ 
  children, 
  id, 
  title, 
  className = '', 
  onEdit,
  onMove,
  onToggleVisibility,
  isVisible = true
}: EditableSectionProps) {
  const { isAuthenticated } = useAuth();
  const { isEditMode, setHasUnsavedChanges } = useEdit();
  
  const [isHovered, setIsHovered] = useState(false);

  const showControls = isAuthenticated && isEditMode && isHovered;

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
    setHasUnsavedChanges(true);
  };

  const handleMove = (direction: 'up' | 'down') => {
    if (onMove) {
      onMove(direction);
    }
    setHasUnsavedChanges(true);
  };

  const handleToggleVisibility = () => {
    if (onToggleVisibility) {
      onToggleVisibility();
    }
    setHasUnsavedChanges(true);
  };

  return (
    <div
      className={`relative ${className} ${!isVisible ? 'opacity-50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Controls */}
      {showControls && (
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
          {/* Section Title Badge */}
          <Badge variant="secondary" className="bg-brand-dark text-white">
            {title}
          </Badge>

          {/* Visibility Toggle */}
          <Button
            size="sm"
            variant="outline"
            onClick={handleToggleVisibility}
            className="h-8 w-8 p-0 bg-white shadow-lg"
            title={isVisible ? "Ocultar seção" : "Mostrar seção"}
          >
            {isVisible ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>

          {/* Section Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                className="h-8 w-8 p-0 bg-brand-teal hover:bg-brand-dark-blue shadow-lg"
              >
                <Settings className="h-4 w-4 text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handleEdit}>
                <Edit3 className="h-4 w-4 mr-2" />
                Editar Conteúdo
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem onClick={() => handleMove('up')}>
                <Move className="h-4 w-4 mr-2" />
                Mover para Cima
              </DropdownMenuItem>
              
              <DropdownMenuItem onClick={() => handleMove('down')}>
                <Move className="h-4 w-4 mr-2" />
                Mover para Baixo
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem onClick={handleToggleVisibility}>
                {isVisible ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-2" />
                    Ocultar Seção
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-2" />
                    Mostrar Seção
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {/* Section Content */}
      <div className={`${isEditMode ? 'relative' : ''}`}>
        {children}
      </div>

      {/* Edit Mode Overlay */}
      {showControls && (
        <div className="absolute inset-0 border-2 border-dashed border-brand-teal bg-brand-teal/5 pointer-events-none rounded-lg">
          <div className="absolute bottom-2 left-2">
            <Badge className="bg-brand-teal text-white">
              {title}
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
}