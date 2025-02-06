import { ChevronDown, ChevronRight, FolderIcon } from "lucide-react";
import { useState } from "react";

interface AccountNode {
  id: string;
  name: string;
  children?: AccountNode[];
  balance?: number;
}

const sampleAccounts: AccountNode[] = [
  {
    id: "1",
    name: "الأصول",
    children: [
      {
        id: "1-1",
        name: "الأصول المتداولة",
        children: [
          { id: "1-1-1", name: "النقدية", balance: 100000 },
          { id: "1-1-2", name: "المدينون", balance: 50000 },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "الخصوم",
    children: [
      {
        id: "2-1",
        name: "الخصوم المتداولة",
        children: [
          { id: "2-1-1", name: "الدائنون", balance: 30000 },
        ],
      },
    ],
  },
];

const AccountNode = ({ node, level = 0 }: { node: AccountNode; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="animate-fadeIn">
      <div
        className="flex items-center py-2 px-4 hover:bg-accent cursor-pointer"
        style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="w-4 h-4 ml-2" />
          ) : (
            <ChevronRight className="w-4 h-4 ml-2" />
          )
        ) : (
          <FolderIcon className="w-4 h-4 ml-2" />
        )}
        <span>{node.name}</span>
        {node.balance !== undefined && (
          <span className="mr-auto text-muted-foreground">
            {node.balance.toLocaleString()} ريال
          </span>
        )}
      </div>
      {isExpanded && hasChildren && (
        <div className="mr-4">
          {node.children?.map((child) => (
            <AccountNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeView = () => {
  return (
    <div className="border rounded-lg">
      {sampleAccounts.map((account) => (
        <AccountNode key={account.id} node={account} />
      ))}
    </div>
  );
};