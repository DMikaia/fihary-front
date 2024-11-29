"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ResearchForm() {
  const [value, setValue] = useState<string>("");

  const onSubmit = () => {
    console.log(value);
  };

  return (
    <form onSubmit={() => onSubmit()} className="flex gap-4 items-center">
      <Input
        placeholder="Que recherchez-vous?"
        value={value}
        className="h-12 rounded-xl flex flex-row-reverse w-[264px]"
        onChange={(e) => setValue(e.target.value)}
        suffix={<Search size={16} className="stroke-secondary-2" />}
      />
      <Button className="bg-[#A1D83B] hover:bg-[#A1D83B]/95 text-white h-12 rounded-xl px-8">
        Rechercher
      </Button>
    </form>
  );
}
