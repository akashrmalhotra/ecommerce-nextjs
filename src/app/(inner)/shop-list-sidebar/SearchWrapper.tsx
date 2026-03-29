"use client";
import { useSearchParams } from 'next/navigation';
import { ReactNode } from "react";

interface Props {
  children: (searchQuery: string) => ReactNode;
}

export default function SearchWrapper({ children }: Props) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  return <>{children(searchQuery)}</>;
}
