import React, { createContext, useContext, useState, useCallback } from 'react';
import { ContactModalContextType } from '../types';

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string | undefined>('Plan Básico');
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>('Plan Básico');
  const [preselectedPrice, setPreselectedPrice] = useState<string | undefined>('$49.990 CLP');
  const [originPage, setOriginPage] = useState<string | undefined>('Inicio');

  const openModal = useCallback((options?: {
    product?: string;
    plan?: string;
    price?: string;
    origin?: string;
  }) => {
    if (options?.product) setPreselectedProduct(options.product);
    if (options?.plan) setPreselectedPlan(options.plan);
    if (options?.price) setPreselectedPrice(options.price);
    if (options?.origin) setOriginPage(options.origin);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        preselectedProduct,
        preselectedPlan,
        preselectedPrice,
        originPage,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = (): ContactModalContextType => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
