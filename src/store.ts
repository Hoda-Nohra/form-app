import { create } from 'zustand';
import { FormData } from './type';

interface FormState {
  formData: FormData[];
  setFormData: (data: FormData) => void;
  deleteFormData: (index: number) => void;
}

const useStore = create<FormState>((set) => ({
  formData: [],
  setFormData: (data: FormData) =>
    set((prevState) => ({...prevState, formData: [...prevState.formData, data] })),
  deleteFormData: (index: number) =>
    set((prevState) => ({...prevState, formData: prevState.formData.filter((_, i) => i !== index) })),
}));

export { useStore };
