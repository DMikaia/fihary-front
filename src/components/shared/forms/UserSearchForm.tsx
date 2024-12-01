"use client"

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const UserSearchForm = () => {
    const [value, setValue] = useState<string>("");

    const onSubmit = () => {
        console.log(value);
    };
    return (
        <form onSubmit={() => onSubmit()} className="flex-col md:flex-row gap-4 items-center hidden md:flex">
            <Input
                placeholder="Produit, catégorie, formation"
                value={value}
                className="h-[45px] md:h-11 rounded-xl flex flex-row-reverse w-[340px] bg-transparent"
                onChange={(e) => setValue(e.target.value)}
                suffix={<Search size={16} className="stroke-secondary-2" />}
            />
        </form>
    );
};

export default UserSearchForm;