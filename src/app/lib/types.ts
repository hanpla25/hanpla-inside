export interface ModalToggleProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RecentGallery {
  abbr: string;
  name: string;
  link: string;
}

export interface RecentVisitModalProps extends ModalToggleProps {
  items: RecentGallery[];
  setItems: React.Dispatch<React.SetStateAction<RecentGallery[]>>;
}
