import { ElementType } from 'react';

interface ToolboxItem {
  title: string;
  iconType: ElementType;
  color: string;
}

interface ToolboxItemsProps {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
  useColors?: boolean;
}

export const ToolboxItems: React.FC<ToolboxItemsProps> = ({ 
  items, 
  className = "", 
  itemsWrapperClassName = "",
  useColors = false 
}) => {
  return (
    <div className={`flex gap-4 py-2 items-center overflow-hidden ${className}`}>
      <div className={`flex gap-3 ${itemsWrapperClassName}`}>
        {items.map((item, index) => {
          const Icon = item.iconType;
          return (
            <div
              key={`${item.title}-${index}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors border border-border/50 whitespace-nowrap"
            >
              <Icon 
                className="text-xl" 
                style={useColors ? { color: item.color } : undefined} 
              />
              <span className="font-medium text-sm">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};