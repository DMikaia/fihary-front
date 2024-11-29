"use client"

import { Checkbox } from '@/components/ui/checkbox';
import { MARKET_CATEGORIES } from '@/constants/constant';
import React, { FC } from 'react';

const MarketCategories: FC = (): JSX.Element => {
    return (
        <div className="categories mt-5">
            <h3 className="text-lg">Catégories</h3>
            <div className="categories__content mt-4 flex flex-col gap-3">
                {MARKET_CATEGORIES.map((category, index) => (
                    <div className="checkbox flex items-center gap-2" key={index}>
                        <Checkbox id={category.id} />
                        <label
                            htmlFor={category.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {category.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketCategories;