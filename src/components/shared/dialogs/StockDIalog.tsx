import { Button } from "@/components/ui/button";
import StockForm from "../forms/StockForm";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function StockDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2 px-6 items-center w-fit">
          <Plus size={16} className="text-white" />
          <p>Ajouter</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[544px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau produit</DialogTitle>
          <DialogDescription className="hidden">Stock</DialogDescription>
        </DialogHeader>

        <StockForm />
      </DialogContent>
    </Dialog>
  );
}
