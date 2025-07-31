
import React from 'react';
import LockedButton from './LockedButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuestionPaginationProps {
  totalQuestions: number;
  currentPage: number;
  questionsPerPage: number;
  onPageChange: (page: number) => void;
}

const QuestionPagination: React.FC<QuestionPaginationProps> = ({
  totalQuestions,
  currentPage,
  questionsPerPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);
  
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <LockedButton
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </LockedButton>
      
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-2 py-1 text-gray-500">...</span>
          ) : (
            <LockedButton
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              className={currentPage === page ? "bg-gradient-to-r from-orange-500/90 to-teal-500/90 text-white" : ""}
            >
              {page}
            </LockedButton>
          )}
        </React.Fragment>
      ))}
      
      <LockedButton
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </LockedButton>
    </div>
  );
};

export default QuestionPagination;
