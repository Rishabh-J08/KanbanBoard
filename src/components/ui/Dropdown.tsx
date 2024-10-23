import { useState,useRef, useEffect } from "react";



interface DropdownProps {
    trigger: React.ReactNode;
    items: {
        label: string;
        onClick: ()=> void;
        icon?: React.ReactNode;
    }[];
    align?: 'left' | 'right';
}

export const Dropdown: React.FC<DropdownProps> = ({
trigger,
items, 
align = 'left'
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const handleClickOutSide = (event: MouseEvent) =>{
            if(
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutSide);
        return ()=> document.removeEventListener('mousedown', handleClickOutSide);
    }, [])


    return  (
        <div className="relative" ref={dropdownRef}>
          <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
    
          {isOpen && (
            <div
              className={`
                absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 
                ring-black ring-opacity-5 focus:outline-none
                ${align === 'left' ? 'left-0' : 'right-0'}
              `}
            >
              <div className="py-1">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    className="
                      flex w-full items-center px-4 py-2 text-sm text-gray-700
                      hover:bg-gray-100 focus:bg-gray-100
                    "
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    };

