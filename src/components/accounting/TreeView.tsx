import { ChevronDown, ChevronRight, FolderIcon } from "lucide-react";
import { useState } from "react";

interface AccountNode {
  id: string;
  name: string;
  children?: AccountNode[];
  balance?: number;
  type?: 'debit' | 'credit';
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
          { id: "1-1-1", name: "النقدية", balance: 100000, type: 'debit' },
          { id: "1-1-2", name: "المدينون", balance: 50000, type: 'debit' },
          { id: "1-1-3", name: "المخزون", balance: 75000, type: 'debit' },
        ],
      },
      {
        id: "1-2",
        name: "الأصول الثابتة",
        children: [
          { id: "1-2-1", name: "المباني", balance: 500000, type: 'debit' },
          { id: "1-2-2", name: "المعدات", balance: 200000, type: 'debit' },
          { id: "1-2-3", name: "السيارات", balance: 150000, type: 'debit' },
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
          { id: "2-1-1", name: "الدائنون", balance: 30000, type: 'credit' },
          { id: "2-1-2", name: "القروض قصيرة الأجل", balance: 100000, type: 'credit' },
        ],
      },
      {
        id: "2-2",
        name: "الخصوم طويلة الأجل",
        children: [
          { id: "2-2-1", name: "القروض طويلة الأجل", balance: 200000, type: 'credit' },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "حقوق الملكية",
    children: [
      { id: "3-1", name: "رأس المال", balance: 620000, type: 'credit' },
      { id: "3-2", name: "الأرباح المحتجزة", balance: 125000, type: 'credit' },
    ],
  },
  {
    id: "4",
    name: "الإيرادات",
    children: [
      { id: "4-1", name: "إيرادات المبيعات", balance: 200000, type: 'credit' },
      { id: "4-2", name: "إيرادات أخرى", balance: 10000, type: 'credit' },
    ],
  },
  {
    id: "5",
    name: "المصروفات",
    children: [
      { id: "5-1", name: "تكلفة المبيعات", balance: 120000, type: 'debit' },
      { id: "5-2", name: "مصروفات إدارية", balance: 50000, type: 'debit' },
      { id: "5-3", name: "مصروفات تسويقية", balance: 15000, type: 'debit' },
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
        style={{ paddingRight: `${level * 1.5 + 1}rem` }}
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
          <span className={`mr-auto ${node.type === 'debit' ? 'text-blue-600' : 'text-green-600'}`}>
            {node.balance.toLocaleString()} ريال
          </span>
        )}
      </div>
      {isExpanded && hasChildren && (
        <div className="ml-4">
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