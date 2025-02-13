
import { ChevronDown, ChevronRight, FolderIcon, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AccountDialog } from "./AccountDialog";
import { toast } from "sonner";

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

const AccountNode = ({ 
  node, 
  level = 0,
  onAddChild,
  onEdit,
  onDelete 
}: { 
  node: AccountNode; 
  level?: number;
  onAddChild: (parentId: string, newAccount: Omit<AccountNode, 'id'>) => void;
  onEdit: (id: string, updates: Partial<AccountNode>) => void;
  onDelete: (id: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleDelete = () => {
    onDelete(node.id);
    setShowDeleteDialog(false);
    toast.success("تم حذف الحساب بنجاح");
  };

  return (
    <div className="animate-fadeIn">
      <div
        className="flex items-center py-2 px-4 hover:bg-accent group"
        style={{ paddingRight: `${level * 1.5 + 1}rem` }}
      >
        <div 
          className="flex items-center cursor-pointer flex-1"
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
        <div className="opacity-0 group-hover:opacity-100 flex gap-2 mr-2">
          <AccountDialog
            trigger={
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            }
            onSave={(data) => {
              onAddChild(node.id, {
                name: data.name,
                balance: data.balance,
                type: data.type,
              });
            }}
          />
          <AccountDialog
            trigger={
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
            }
            title="تعديل الحساب"
            defaultValues={{
              name: node.name,
              balance: node.balance || 0,
              type: node.type || 'debit',
            }}
            onSave={(data) => {
              onEdit(node.id, {
                name: data.name,
                balance: data.balance,
                type: data.type,
              });
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowDeleteDialog(true)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>هل أنت متأكد من حذف هذا الحساب؟</AlertDialogTitle>
            <AlertDialogDescription>
              سيتم حذف الحساب وجميع الحسابات الفرعية التابعة له. هذا الإجراء لا يمكن التراجع عنه.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>حذف</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {isExpanded && hasChildren && (
        <div className="ml-4">
          {node.children?.map((child) => (
            <AccountNode 
              key={child.id} 
              node={child} 
              level={level + 1}
              onAddChild={onAddChild}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeView = () => {
  const [accounts, setAccounts] = useState<AccountNode[]>(sampleAccounts);

  const addAccount = (parentId: string, newAccount: Omit<AccountNode, 'id'>) => {
    const newId = Math.random().toString(36).substr(2, 9);
    const addToChildren = (nodes: AccountNode[]): AccountNode[] => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              { id: newId, ...newAccount },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: addToChildren(node.children),
          };
        }
        return node;
      });
    };
    setAccounts(addToChildren(accounts));
  };

  const editAccount = (id: string, updates: Partial<AccountNode>) => {
    const updateNode = (nodes: AccountNode[]): AccountNode[] => {
      return nodes.map((node) => {
        if (node.id === id) {
          return { ...node, ...updates };
        }
        if (node.children) {
          return {
            ...node,
            children: updateNode(node.children),
          };
        }
        return node;
      });
    };
    setAccounts(updateNode(accounts));
  };

  const deleteAccount = (id: string) => {
    const deleteNode = (nodes: AccountNode[]): AccountNode[] => {
      return nodes.filter((node) => {
        if (node.id === id) {
          return false;
        }
        if (node.children) {
          node.children = deleteNode(node.children);
        }
        return true;
      });
    };
    setAccounts(deleteNode(accounts));
  };

  return (
    <div className="border rounded-lg">
      <div className="p-4 border-b">
        <AccountDialog
          onSave={(data) => {
            const newId = Math.random().toString(36).substr(2, 9);
            setAccounts([
              ...accounts,
              { id: newId, ...data },
            ]);
          }}
        />
      </div>
      {accounts.map((account) => (
        <AccountNode 
          key={account.id} 
          node={account}
          onAddChild={addAccount}
          onEdit={editAccount}
          onDelete={deleteAccount}
        />
      ))}
    </div>
  );
};
