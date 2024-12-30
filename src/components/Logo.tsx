import React from 'react';
import { Gem, Mountain } from 'lucide-react';

export default function Logo() {
  return (
    <div className="relative">
      <Mountain className="w-6 h-6 text-emerald-600" />
      <Gem className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1" />
    </div>
  );
}