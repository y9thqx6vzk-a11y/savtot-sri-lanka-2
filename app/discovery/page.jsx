'use client';

import React from 'react';
import { useSite } from '../../contexts/SiteContext';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import NoticeBoardGallery from '../../components/NoticeBoardGallery';

export default function DiscoveryPage() {
  const { lang, t } = useSite();

  return (
    <div className="pt-24 bg-stone-900 min-h-screen">
      <div className="container mx-auto px-4 pb-20">
        <NoticeBoardGallery />
      </div>
    </div>
  );
}
