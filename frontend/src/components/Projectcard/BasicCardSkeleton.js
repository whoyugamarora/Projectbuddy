import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BasicCardSkeleton() {
  return (
    <div
      className="relative w-full rounded-3xl p-6 bg-white shadow-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      {/* Floating Gradient Circle */}
      <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Header Section Skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <Skeleton circle height={56} width={56} />
        <div>
          <Skeleton height={20} width={120} />
          <Skeleton height={16} width={80} />
        </div>
      </div>

      {/* Content Section Skeleton */}
      <Skeleton height={14} count={3} className="mb-4" />
      <div className="text-sm mb-4">
        <Skeleton height={14} width={180} />
      </div>

      {/* Action Buttons Skeleton */}
      <div className="flex justify-between items-center">
        <Skeleton height={36} width={100} />
        <Skeleton height={36} width={36} />
      </div>
    </div>
  );
}
