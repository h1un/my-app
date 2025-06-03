'use client';

import * as React from 'react';
import { Alert, AlertProps } from './Alert';

interface AlertContextValue {
  openAlert: (props: Omit<AlertProps, 'open'>) => void;
  closeAlert: () => void;
}

const AlertContext = React.createContext<AlertContextValue | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alertProps, setAlertProps] = React.useState<Omit<AlertProps, 'open'> | null>(null);

  const openAlert = React.useCallback((props: Omit<AlertProps, 'open'>) => {
    setAlertProps(props);
  }, []);

  const closeAlert = React.useCallback(() => {
    setAlertProps(null);
  }, []);

  return (
    <AlertContext.Provider value={{ openAlert, closeAlert }}>
      {children}
      {alertProps && (
        <Alert
          {...alertProps}
          open={true}
          onClose={() => {
            alertProps.onClose?.();
            closeAlert();
          }}
          onCancel={() => {
            alertProps.onCancel?.();
            closeAlert();
          }}
          onConfirm={() => {
            alertProps.onConfirm?.();
            closeAlert();
          }}
        />
      )}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = React.useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}
